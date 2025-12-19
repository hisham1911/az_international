"use client";

import { Search, Calendar, Award, User, Hash, Loader2 } from "lucide-react";
import { useState, useCallback } from "react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { OptimizedAnimation } from "@/components/ui/optimized-animation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  searchServiceByName,
  searchServiceBySerialNumber,
} from "@/lib/api-services";
import { getServiceMethodLabel, getCertificateTypeLabel } from "@/lib/enums";

export default function CertificatesPage() {
  const [searchType, setSearchType] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [certificates, setCertificates] = useState([]);
  const [error, setError] = useState("");
  const [lastSearchTime, setLastSearchTime] = useState(0); // للتحكم في تكرار البحث

  // تحسين دالة البحث باستخدام useCallback لتجنب إعادة إنشاؤها مع كل تصيير
  const handleSearch = useCallback(
    async (e) => {
      e.preventDefault();

      if (!searchQuery.trim()) {
        setError("Please enter a search value");
        return;
      }

      setIsSearching(true);
      setError("");
      setCertificates([]);

      try {
        let results = [];
        // تحقق من وقت آخر بحث لمنع الطلبات المتكررة (throttling)
        const now = Date.now();
        if (now - lastSearchTime < 300) {
          // 300 مللي ثانية بين كل بحث
          return;
        }
        setLastSearchTime(now);

        // البحث باستخدام الرقم التسلسلي - هذا هو الأكثر فعالية
        if (searchType === "serial" || searchType === "all") {
          try {
            const serialResults =
              await searchServiceBySerialNumber(searchQuery);

            if (serialResults && serialResults.length > 0) {
              results = [...serialResults];
            }
          } catch (error) {
            // تم التعامل مع الخطأ بصمت
          }
        }

        // إذا لم نجد نتائج بالرقم التسلسلي، نحاول بالاسم
        if (
          (searchType === "name" || searchType === "all") &&
          results.length === 0
        ) {
          try {
            const nameResults = await searchServiceByName(searchQuery);

            if (nameResults && nameResults.length > 0) {
              results = [...nameResults];
            }
          } catch (error) {
            // تم التعامل مع الخطأ بصمت
          }
        }

        // التعامل مع نتائج البحث
        if (results && results.length > 0) {
          // تحويل جميع النتائج إلى تنسيق العرض
          const formattedCertificates = results.map((result) => {
            try {
              return {
                id: `CERT-${result.id || "Unknown"}`,
                name: result.personName || result.name || "N/A",
                title: getServiceMethodLabel(
                  result.serviceMethod || result.method
                ),
                type: getCertificateTypeLabel(
                  result.certificateType || result.type
                ),
                serialNumber: result.serialNumber || result.s_N || "N/A",
                expiryDate:
                  result.expiryDate || result.endDate
                    ? new Date(
                        result.expiryDate || result.endDate
                      ).toLocaleDateString()
                    : "N/A",
                status:
                  (result.expiryDate || result.endDate) &&
                  new Date(result.expiryDate || result.endDate) > new Date()
                    ? "active"
                    : "expired",
              };
            } catch (formatError) {
              return {
                id: `CERT-${result.id || result.srId || "Unknown"}`,
                name: result.personName || result.name || "Unknown",
                title: "Certificate",
                type: "Unknown Type",
                serialNumber: result.serialNumber || result.s_N || "Unknown",
                expiryDate: "N/A",
                status: "unknown",
              };
            }
          });

          setCertificates(formattedCertificates);
          setError("");
        } else {
          setCertificates([]);
          setError("No certificate found with these details");
        }
      } catch (error) {
        setError("An error occurred while searching. Please try again.");
      } finally {
        setIsSearching(false);
        setSearchPerformed(true);
      }
    },
    [
      searchQuery,
      searchType,
      lastSearchTime,
      setLastSearchTime,
      setIsSearching,
      setError,
      setCertificates,
    ]
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <OptimizedAnimation type="fade">
        <h1 className="mb-6 text-center text-3xl font-bold md:text-4xl">
          Certificate Verification
        </h1>

        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">
          Verify the authenticity of certificates issued by AZ INTERNATIONAL by
          searching with the trainee&apos;s name or the certificate&apos;s
          serial number
        </p>
      </OptimizedAnimation>

      <OptimizedAnimation type="fade" delay={200}>
        <Card className="mx-auto mb-10 max-w-3xl transition-all duration-300 hover:shadow-md">
          <CardHeader>
            <CardTitle className="text-center text-xl">
              Search Certificates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs
              defaultValue="name"
              className="w-full"
              onValueChange={setSearchType}
            >
              <TabsList className="mb-6 grid grid-cols-2">
                <TabsTrigger value="name" className="text-center">
                  <User className="mr-2 h-4 w-4" />
                  Search by Name
                </TabsTrigger>
                <TabsTrigger value="serial" className="text-center">
                  <Hash className="mr-2 h-4 w-4" />
                  Search by Serial Number
                </TabsTrigger>
              </TabsList>

              <form onSubmit={handleSearch} className="space-y-4">
                <TabsContent value="name" className="mt-0">
                  <div className="space-y-2">
                    <label
                      htmlFor="name-search"
                      className="text-sm font-medium"
                    >
                      Trainee or Engineer Name
                    </label>
                    <Input
                      id="name-search"
                      placeholder="Enter full name"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="serial" className="mt-0">
                  <div className="space-y-2">
                    <label
                      htmlFor="serial-search"
                      className="text-sm font-medium"
                    >
                      Certificate Serial Number
                    </label>
                    <Input
                      id="serial-search"
                      placeholder="Enter serial number"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </TabsContent>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700"
                  disabled={isSearching}
                >
                  {isSearching ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </>
                  )}
                </Button>
              </form>
            </Tabs>
          </CardContent>
        </Card>
      </OptimizedAnimation>

      {searchPerformed && (
        <OptimizedAnimation type="fade" delay={300}>
          {certificates.length > 0 ? (
            <div className="space-y-6">
              {certificates.length > 1 && (
                <div className="mb-6 text-center">
                  <p className="text-lg font-medium">
                    Found {certificates.length} certificates for this search
                  </p>
                </div>
              )}

              {certificates.map((cert, index) => (
                <Card
                  key={cert.id || index}
                  className="mx-auto mb-6 max-w-3xl border-t-4 border-green-500 transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader className="pb-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <CardTitle className="text-xl">{cert.title}</CardTitle>
                      <Badge
                        className={
                          cert.status === "active"
                            ? "border-green-200 bg-green-100 text-green-800"
                            : "border-red-200 bg-red-100 text-red-800"
                        }
                      >
                        {cert.status === "active" ? "Active" : "Expired"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <User className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-500">
                              Trainee Name
                            </p>
                            <p className="font-medium">{cert.name}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Hash className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-500">
                              Serial Number
                            </p>
                            <p className="font-medium">{cert.serialNumber}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-500">
                              Certificate Type
                            </p>
                            <p className="font-medium">{cert.type}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-500">Expiry Date</p>
                            <p className="font-medium">{cert.expiryDate}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <Alert className="mx-auto max-w-3xl border-orange-200 bg-orange-50 text-orange-800">
              <AlertDescription className="flex items-center justify-center py-2 text-center">
                {error}
              </AlertDescription>
            </Alert>
          ) : null}
        </OptimizedAnimation>
      )}
    </div>
  );
}
