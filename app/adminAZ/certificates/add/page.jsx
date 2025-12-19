"use client";

import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { CalendarIcon, Loader2, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { createService } from "@/lib/api-services";
import { ServiceMethodOptions, CertificateTypeOptions } from "@/lib/enums";
import { cn } from "@/lib/utils";

export default function AddCertificatePage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState({
    personName: "",
    serialNumber: "",
    serviceMethod: "1",
    certificateType: "1",
    expiryDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: date,
    });
  };

  const handleSelectChange = (value, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      // Validate required fields
      if (
        !formData.personName ||
        !formData.serialNumber ||
        !formData.certificateType ||
        !formData.expiryDate
      ) {
        toast({
          title: "Validation Error",
          description:
            "Please fill in all required fields (Person Name, Serial Number, Type, and Expiry Date).",
          variant: "destructive",
        });
        setIsSaving(false);
        return;
      }

      // Additional validation
      if (formData.expiryDate && new Date(formData.expiryDate) < new Date()) {
        toast({
          title: "Date Error",
          description: "Expiry date cannot be before current date.",
          variant: "destructive",
        });
        setIsSaving(false);
        return;
      }

      // Prepare data for submission
      const certificateData = {
        personName: formData.personName,
        serialNumber: formData.serialNumber,
        serviceMethod: parseInt(formData.serviceMethod),
        certificateType: parseInt(formData.certificateType),
        expiryDate:
          formData.expiryDate instanceof Date
            ? formData.expiryDate.toISOString()
            : new Date(formData.expiryDate).toISOString(),
      };

      await createService(certificateData);

      toast({
        title: "Success",
        description: "Certificate has been successfully created",
      });

      router.push("/adminAZ/certificates");
    } catch (error) {
      // Show error message without logging to console
      toast({
        title: "Error",
        description:
          error.message ||
          "An error occurred while creating the certificate. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <FadeIn>
        <div className="mb-6 flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="hover:bg-gray-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Add New Certificate
            </h1>
            <p className="text-gray-500">
              Create a new certificate with the details below.
            </p>
          </div>
        </div>

        <Card className="shadow-sm">
          <form onSubmit={handleSubmit}>
            <CardHeader className="border-b bg-gray-50">
              <CardTitle>Certificate Information</CardTitle>
              <CardDescription>
                Fill in the details for the new certificate
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 pt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="personName">Person Name</Label>
                    <Input
                      id="personName"
                      name="personName"
                      placeholder="Enter person name"
                      value={formData.personName}
                      onChange={handleInputChange}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="serialNumber">Serial Number</Label>
                    <Input
                      id="serialNumber"
                      name="serialNumber"
                      placeholder="Enter serial number"
                      value={formData.serialNumber}
                      onChange={handleInputChange}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="serviceMethod">Service Method</Label>
                    <Select
                      value={formData.serviceMethod}
                      onValueChange={(value) =>
                        handleSelectChange(value, "serviceMethod")
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select service method" />
                      </SelectTrigger>
                      <SelectContent>
                        {ServiceMethodOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value.toString()}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="certificateType">Certificate Type</Label>
                    <Select
                      value={formData.certificateType}
                      onValueChange={(value) =>
                        handleSelectChange(value, "certificateType")
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select certificate type" />
                      </SelectTrigger>
                      <SelectContent>
                        {CertificateTypeOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value.toString()}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Expiry Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "mt-1 w-full justify-start text-left font-normal",
                            !formData.expiryDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.expiryDate ? (
                            format(formData.expiryDate, "PPP", { locale: enUS })
                          ) : (
                            <span>Select a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.expiryDate}
                          onSelect={(date) =>
                            handleDateChange(date, "expiryDate")
                          }
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between border-t bg-gray-50 p-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/adminAZ/certificates")}
              >
                Cancel
              </Button>

              <Button type="submit" disabled={isSaving}>
                {isSaving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Certificate"
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </FadeIn>
    </div>
  );
}
