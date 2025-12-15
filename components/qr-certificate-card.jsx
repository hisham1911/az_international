"use client";

import { Download, Printer } from "lucide-react";
import Image from "next/image";
import QRCode from "react-qr-code";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function QRCertificateCard({
  certificate,
  onPrint,
  onDownloadQR,
}) {
  if (!certificate) return null;

  return (
    <Card className="mx-auto max-w-sm overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardContent className="flex flex-col items-center p-6">
        <div className="relative mb-4 h-12 w-24">
          <Image
            src={certificate.logoUrl || "/placeholder.svg?height=80&width=160"}
            alt="AZ International Logo"
            fill
            className="object-contain"
          />
        </div>

        <h3 className="mb-1 text-lg font-semibold">{certificate.title}</h3>
        <p className="mb-4 text-sm text-gray-500">
          Certificate #{certificate.serialNumber}
        </p>

        <div className="mb-4 rounded-lg border bg-white p-4 shadow-sm">
          <QRCode
            id={`qr-certificate-${certificate.serialNumber}`}
            value={certificate.verificationUrl}
            size={180}
            level="H"
            className="h-auto max-w-full"
          />
        </div>

        <p className="mb-4 text-center text-sm text-gray-600">
          Scan this QR code to verify the authenticity of this certificate
        </p>

        <p className="mb-1 text-sm font-medium">{certificate.name}</p>
        <p className="mb-4 text-xs text-gray-500">
          Valid until {new Date(certificate.expiryDate).toLocaleDateString()}
        </p>

        <div className="flex w-full space-x-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            onClick={onDownloadQR}
          >
            <Download className="mr-1 h-4 w-4" />
            QR Code
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            onClick={onPrint}
          >
            <Printer className="mr-1 h-4 w-4" />
            Print
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
