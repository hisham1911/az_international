"use client";

import { CalendarIcon, ChevronLeft, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CustomCalendar } from "@/components/ui/custom-calendar";
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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { createService } from "@/lib/api-services";
import { ServiceMethodOptions, CertificateTypeOptions } from "@/lib/enums";
import { cn } from "@/lib/utils";
import { formatDate, addYears } from "@/utils/date-utils";

/**
 * Create New Certificate Page
 * Allows the user to enter certificate data and save it
 */
export default function CreateCertificatePage() {
  const router = useRouter();
  const { toast } = useToast();

  // Certificate creation form state
  const [formData, setFormData] = useState({
    personName: "", // Certificate holder name
    serialNumber: `CERT-${Math.floor(10000 + Math.random() * 90000)}`, // Serial Number
    serviceMethod: "1", // Service Method (VT, PT, MT, RT, UT)
    certificateType: "1", // Certificate Type (Initial, Recertificate)
    expiryDate: addYears(new Date(), 2), // Expiry Date
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handle text input field changes
   * @param {Event} e - Change event
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  /**
   * Handle dropdown select changes
   * @param {string} value - New value
   * @param {string} fieldName - Field name
   */
  const handleSelectChange = (value, fieldName) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  /**
   * Handle date field changes
   * @param {Date} date - New date
   * @param {string} fieldName - Date field name
   */
  const handleDateChange = (date, fieldName) => {
    setFormData((prev) => ({ ...prev, [fieldName]: date }));
  };

  /**
   * Handle form submission
   * @param {Event} e - Submit event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceData = {
        personName: formData.personName,
        serialNumber: formData.serialNumber,
        serviceMethod: parseInt(formData.serviceMethod),
        certificateType: parseInt(formData.certificateType),
        expiryDate: formData.expiryDate.toISOString(),
      };

      await createService(serviceData);

      toast({
        title: "Certificate Created",
        description: "Certificate has been successfully created.",
      });

      router.push("/adminAZ/certificates");
    } catch (error) {
      toast({
        title: "Error",
        description:
          "An error occurred while creating the certificate: " + error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <FadeIn>
        <div className="flex items-center gap-2">
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
              Create Certificate
            </h1>
            <p className="text-gray-500">
              Create a new certificate for a recipient.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <form onSubmit={handleSubmit}>
          <Card className="shadow-sm">
            <CardHeader className="border-b bg-gray-50">
              <CardTitle>Certificate Information</CardTitle>
              <CardDescription>Enter the certificate details</CardDescription>
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
                            formatDate(formData.expiryDate)
                          ) : (
                            <span>Select a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <CustomCalendar
                          mode="single"
                          selected={formData.expiryDate}
                          onSelect={(date) =>
                            handleDateChange(date, "expiryDate")
                          }
                          disabled={(date) => date < new Date()}
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

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" /> Create Certificate
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </FadeIn>
    </div>
  );
}
