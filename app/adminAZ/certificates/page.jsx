"use client";

import {
  Search,
  Plus,
  Loader2,
  FileSpreadsheet,
  Download,
  FileText,
  AlertCircle,
} from "lucide-react";
import { Edit as EditIcon, Trash2 as TrashIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

import { FadeIn } from "@/components/animations/fade-in";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import {
  searchServiceByName,
  searchServiceBySerialNumber,
  deleteService,
  uploadExcelFile,
  exportCertificatesToExcel,
  deleteAllData,
} from "@/lib/api-services";
import { getServiceMethodLabel, getCertificateTypeLabel } from "@/lib/enums";

/**
 * Certificate Management Page
 * Displays a list of all certificates and allows creating, editing, and deleting certificates
 */
export default function CertificatesPage() {
  const router = useRouter();
  const { toast } = useToast();

  // Page states
  const [certificates, setCertificates] = useState({}); // Certificates list
  const [loading, setLoading] = useState(false); // Loading state - initially false
  const [searchQuery, setSearchQuery] = useState(""); // Search text
  const [searchType, setSearchType] = useState("name"); // Search type: 'name' or 'serial'
  const [error, setError] = useState(null); // API error if any
  const [hasSearched, setHasSearched] = useState(false); // Track if user has searched
  const [isUploading, setIsUploading] = useState(false); // Track file upload state
  const [isExporting, setIsExporting] = useState(false); // Track export state
  const [isDeletingAll, setIsDeletingAll] = useState(false); // Track delete all state
  const fileInputRef = useRef(null); // Reference to hidden file input

  /**
   * Function to fetch certificates based on search term and type
   */
  const searchCertificates = async (query, type = searchType) => {
    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      // Check if search value is empty
      const searchTerm = query.trim();

      // If no search, don't display any certificates
      if (!searchTerm) {
        setCertificates({});
        setLoading(false);
        return;
      }

      let results = [];

      // Search based on type using new API
      if (type === "serial") {
        try {
          results = await searchServiceBySerialNumber(searchTerm);
        } catch (serialError) {
          setError(`Error searching by serial number: ${serialError.message}`);
          setCertificates({});
          setLoading(false);
          return;
        }
      } else {
        // Default to name search
        try {
          results = await searchServiceByName(searchTerm);
        } catch (nameError) {
          setError(`Error searching by name: ${nameError.message}`);
          setCertificates({});
          setLoading(false);
          return;
        }
      }

      if (!results || results.length === 0) {
        setCertificates({});
        setLoading(false);
        return;
      }

      // Group certificates by person name (new API structure)
      const groupedCertificates = {};
      results.forEach((cert) => {
        const personName = cert.personName || cert.name;
        if (!groupedCertificates[personName]) {
          groupedCertificates[personName] = [];
        }
        groupedCertificates[personName].push(cert);
      });

      setCertificates(groupedCertificates);
    } catch (error) {
      setError(
        "An error occurred during search. Please try again or contact support."
      );
      setCertificates({});
    } finally {
      setLoading(false);
    }
  };

  /**
   * Fetch certificates on page load
   */
  useEffect(() => {
    // We don't automatically search when first loading the page
  }, []);

  /**
   * Navigate to create certificate page
   */
  const handleCreateCertificate = () => {
    router.push("/adminAZ/certificates/create");
  };

  /**
   * Handle click on the Excel upload button
   */
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  /**
   * Handle file change event from input
   * @param {Event} e - File input change event
   */
  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file is Excel
    const validExcelTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];

    if (!validExcelTypes.includes(file.type)) {
      toast({
        title: "Invalid File",
        description: "Please select a valid Excel file (.xls or .xlsx)",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsUploading(true);
      setError(null);

      // Upload the file
      const result = await uploadExcelFile(file);

      // Refresh search results if there's an active search
      if (hasSearched && searchQuery) {
        searchCertificates(searchQuery, searchType);
      }

      // Show detailed result
      const successMessage =
        result.importedTrainees > 0
          ? `تم استيراد ${result.importedTrainees} متدرب و ${result.importedCertificates} شهادة بنجاح`
          : "لم يتم استيراد أي بيانات. تحقق من تنسيق الملف.";

      setError({
        type:
          result.importedTrainees > 0 || result.updatedTrainees > 0
            ? "success"
            : "warning",
        message: successMessage,
        details: result.errors || [],
        totalErrors: result.totalErrors || 0,
        analysis: result.analysis || null,
        detailedSummary: result.detailedSummary || [],
      });

      // Method 2: Using toast notification
      setTimeout(() => {
        toast({
          title: result.importedTrainees > 0 ? "✅ تم الرفع بنجاح" : "⚠️ تحذير",
          description: successMessage,
          duration: 5000,
        });
      }, 300);

      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      // Show error message
      toast({
        title: "File Upload Error",
        description:
          error.message ||
          "An error occurred while uploading the file. Please try again.",
        variant: "destructive",
      });
      setError(error.message);
    } finally {
      setIsUploading(false);
    }
  };

  /**
   * Handle click on the Export button
   */
  const handleExportClick = async () => {
    try {
      setIsExporting(true);
      await exportCertificatesToExcel();

      toast({
        title: "Export Successful",
        description: "The Excel file has been downloaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Export Failed",
        description: error.message || "Failed to export data.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  /**
   * Handle Delete All Data
   */
  const handleDeleteAllData = async () => {
    if (
      !window.confirm(
        "تحذير: هل أنت متأكد تماماً أنك تريد حذف جميع البيانات؟ هذا الإجراء لا يمكن التراجع عنه!"
      )
    ) {
      return;
    }

    // تأكيد ثاني
    if (
      !window.confirm(
        "تأكيد أخير: سيتم مسح بيانات جميع المتدربين والشهادات من قاعدة البيانات. هل تريد الاستمرار؟"
      )
    ) {
      return;
    }

    try {
      setIsDeletingAll(true);
      await deleteAllData();

      setCertificates({});
      toast({
        title: "تم الحذف",
        description: "تم حذف جميع البيانات بنجاح.",
        variant: "default",
      });
      // تحديث الصفحة لإزالة أي بقايا
      router.refresh();
      window.location.reload();
    } catch (error) {
      toast({
        title: "خطأ",
        description: error.message || "فشلت عملية الحذف.",
        variant: "destructive",
      });
    } finally {
      setIsDeletingAll(false);
    }
  };

  /**
   * Delete a single certificate
   * @param {string} id - Certificate ID
   */
  const handleDeleteCertificate = async (id) => {
    try {
      // Call API to delete certificate
      await deleteService(id);

      // Show success message
      toast({
        title: "Certificate Deleted",
        description: `Certificate has been successfully deleted.`,
      });

      // Remove certificate from state by filtering it out of all groups
      setCertificates((prevCertificates) => {
        const updatedCertificates = {};

        // Go through each name group
        Object.entries(prevCertificates).forEach(([name, certs]) => {
          // Filter out the deleted certificate by traineeId
          const updatedCerts = certs.filter((cert) => cert.traineeId !== id);

          // Only add back non-empty groups
          if (updatedCerts.length > 0) {
            updatedCertificates[name] = updatedCerts;
          }
        });

        return updatedCertificates;
      });
    } catch (error) {
      // Show specific error message from API
      toast({
        title: "Error",
        description:
          error.message || "Failed to delete certificate. Please try again.",
        variant: "destructive",
      });
    }
  };

  /**
   * Format date for display
   * @param {string} dateString - Date string to format
   * @returns {string} - Formatted date
   */
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (error) {
      return "Invalid date";
    }
  };

  return (
    <div className="space-y-6">
      <FadeIn>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Certificates</h1>
            <p className="text-gray-500">
              Manage all certificates issued by AZ INTERNATIONAL.
            </p>
          </div>
          <div className="flex gap-2">
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              className="hidden"
            />

            {/* Export Excel button */}
            <Button
              variant="outline"
              onClick={handleExportClick}
              disabled={isExporting}
            >
              {isExporting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Exporting...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Export Excel
                </>
              )}
            </Button>

            {/* Delete All button */}
            <Button
              variant="destructive"
              onClick={handleDeleteAllData}
              disabled={isDeletingAll}
              className="ml-2"
            >
              {isDeletingAll ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                <>
                  <TrashIcon className="mr-2 h-4 w-4" />
                  Empty DB
                </>
              )}
            </Button>

            {/* Upload Excel button */}
            <Button
              variant="outline"
              onClick={handleUploadClick}
              disabled={isUploading}
            >
              {isUploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <FileSpreadsheet className="mr-2 h-4 w-4" />
                  Upload Excel
                </>
              )}
            </Button>

            {/* Create Certificate button */}
            <Button onClick={handleCreateCertificate}>
              <Plus className="mr-2 h-4 w-4" /> Create Certificate
            </Button>
          </div>
        </div>
      </FadeIn>

      {error && (
        <FadeIn>
          <Alert
            variant={error.type === "success" ? "default" : "destructive"}
            className="mb-6"
          >
            <AlertTitle className="flex items-center justify-between">
              <span>
                {error.type === "success" ? "تمت العملية" : "تنبيه / خطأ"}
              </span>
              {error.totalErrors > 0 && (
                <Badge variant="outline" className="ml-2">
                  {error.totalErrors} خطأ
                </Badge>
              )}
            </AlertTitle>
            <AlertDescription className="mt-2">
              <div className="font-medium">
                {typeof error === "string" ? error : error.message}
              </div>

              {error.analysis && (
                <div className="mt-3 grid grid-cols-2 gap-4 rounded-md bg-black/5 p-3 text-sm md:grid-cols-4">
                  <div>
                    <span className="block text-gray-500">إجمالي الصفوف:</span>
                    <span className="font-bold">
                      {error.analysis.totalRowsInFile}
                    </span>
                  </div>
                  <div>
                    <span className="block text-gray-500">
                      صفوف بها بيانات:
                    </span>
                    <span className="font-bold text-blue-600">
                      {error.analysis.rowsWithData}
                    </span>
                  </div>
                  <div>
                    <span className="block text-gray-500">متدربين فريدين:</span>
                    <span className="font-bold text-green-600">
                      {error.analysis.uniqueTraineesInFile}
                    </span>
                  </div>
                  <div>
                    <span className="block text-gray-500">صفوف مهملة:</span>
                    <span className="font-bold text-gray-400">
                      {error.analysis.emptyRows}
                    </span>
                  </div>
                </div>
              )}

              {error.detailedSummary && error.detailedSummary.length > 0 && (
                <div className="mt-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-bold">
                    <FileText className="h-4 w-4" />
                    ملخص العمليات (بالترتيب حسب ظهورها في الملف):
                  </div>
                  <div className="max-h-60 overflow-y-auto rounded-md border border-gray-200 bg-white/80 p-0 shadow-inner">
                    <table className="w-full border-collapse text-left text-xs">
                      <thead className="sticky top-0 border-b bg-gray-100">
                        <tr>
                          <th className="border-r p-2 text-right">الاسم</th>
                          <th className="w-20 border-r p-2 text-center">
                            الحالة
                          </th>
                          <th className="w-24 p-2 text-center">الصفوف</th>
                        </tr>
                      </thead>
                      <tbody>
                        {error.detailedSummary.map((item, idx) => (
                          <tr
                            key={idx}
                            className="border-b transition-colors hover:bg-gray-50"
                          >
                            <td className="direction-rtl border-r p-2 text-right font-medium">
                              {item.name}{" "}
                              <span className="text-[10px] text-gray-400">
                                ({item.serialNumber})
                              </span>
                            </td>
                            <td className="border-r p-2 text-center">
                              <span
                                className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${
                                  item.status === "New"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-blue-100 text-blue-700"
                                }`}
                              >
                                {item.status === "New" ? "جديد" : "تحديث"}
                              </span>
                            </td>
                            <td className="p-2 text-center text-gray-600">
                              {item.rows.join(", ")}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {error.details && error.details.length > 0 && (
                <div className="mt-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-bold text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    تحذيرات وأخطاء (أول 50):
                  </div>
                  <div className="max-h-40 overflow-y-auto rounded-md border border-red-100 bg-red-50/30 p-2 text-xs">
                    {error.details.map((err, idx) => (
                      <div
                        key={idx}
                        className="mb-1 border-b border-red-100/30 pb-1 text-red-700 last:border-0"
                      >
                        • {err}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </AlertDescription>
          </Alert>
        </FadeIn>
      )}

      <FadeIn delay={100}>
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Search controls */}
          <div className="w-full space-y-4">
            <div className="flex flex-col gap-4 md:flex-row">
              {/* Search type tabs */}
              <div className="flex overflow-hidden rounded-lg border">
                <Button
                  type="button"
                  variant={searchType === "name" ? "default" : "outline"}
                  className={`rounded-none ${
                    searchType === "name"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background"
                  }`}
                  onClick={() => setSearchType("name")}
                >
                  Search by Name
                </Button>
                <Button
                  type="button"
                  variant={searchType === "serial" ? "default" : "outline"}
                  className={`rounded-none ${
                    searchType === "serial"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background"
                  }`}
                  onClick={() => setSearchType("serial")}
                >
                  Search by Serial Number
                </Button>
              </div>
            </div>

            {/* Search input */}
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <div className="flex items-center gap-2">
                <Input
                  type="search"
                  placeholder={
                    searchType === "name"
                      ? "Search by customer name..."
                      : "Search by serial number..."
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="min-w-[250px] pl-9"
                  onKeyDown={(e) =>
                    e.key === "Enter" && searchCertificates(searchQuery)
                  }
                />
                <Button
                  variant="secondary"
                  onClick={() => searchCertificates(searchQuery)}
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {loading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2">Searching...</span>
        </div>
      ) : Object.keys(certificates).length === 0 && hasSearched ? (
        <div className="rounded-lg border bg-background py-12 text-center">
          <Search className="mx-auto mb-4 h-12 w-12 opacity-20" />
          <h3 className="mb-2 text-lg font-medium">No certificates found</h3>
          <p className="text-muted-foreground">
            {searchType === "name"
              ? "No certificates found matching this customer name."
              : "No certificates found with this serial number."}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a different {searchType === "name" ? "name" : "serial number"}{" "}
            or search method
          </p>
        </div>
      ) : Object.keys(certificates).length === 0 ? (
        <div className="py-12 text-center text-muted-foreground">
          <Search className="mx-auto mb-2 h-12 w-12 opacity-20" />
          <p>Enter a search term to find certificates</p>
          <p className="text-sm">Search by customer name or serial number</p>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(certificates).map(([name, certs]) => (
            <div key={name} className="rounded-lg border bg-card shadow-sm">
              <div className="border-b p-4">
                <h3 className="text-lg font-semibold text-card-foreground">
                  {name}
                </h3>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[120px]">Serial Number</TableHead>
                      <TableHead className="w-[150px]">Method</TableHead>
                      <TableHead className="w-[120px]">Type</TableHead>
                      <TableHead className="w-[120px]">Expiry Date</TableHead>
                      <TableHead className="w-[100px]">Status</TableHead>
                      <TableHead className="w-[100px] text-right">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {certs.map((cert) => (
                      <TableRow key={cert.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">
                          {cert.serialNumber || "N/A"}
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="font-normal">
                            {getServiceMethodLabel(cert.serviceMethod)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="font-normal">
                            {getCertificateTypeLabel(cert.certificateType)}
                          </Badge>
                        </TableCell>
                        <TableCell>{formatDate(cert.expiryDate)}</TableCell>
                        <TableCell>
                          {cert.isExpired ? (
                            <Badge
                              variant="destructive"
                              className="font-normal"
                            >
                              Expired
                            </Badge>
                          ) : (
                            <Badge variant="default" className="font-normal">
                              Active
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="icon" asChild>
                              <Link
                                href={`/adminAZ/certificates/edit/${cert.traineeId}`}
                                className="hover:bg-muted"
                              >
                                <EditIcon className="h-4 w-4" />
                              </Link>
                            </Button>
                            <Button
                              variant="destructive"
                              size="icon"
                              onClick={() =>
                                handleDeleteCertificate(cert.traineeId)
                              }
                              className="hover:bg-destructive/90"
                            >
                              <TrashIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
