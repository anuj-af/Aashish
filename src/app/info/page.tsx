"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageBanner from "@/components/PageBanner";
import { getSupabaseClient, type Manufacturer } from "@/lib/supabase";
import { Info, AlertCircle, Loader2 } from "lucide-react";

export default function InfoPage() {
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchManufacturers() {
      try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
          .from("manufacturers")
          .select("*")
          .order("code", { ascending: true });

        if (error) throw error;
        setManufacturers(data || []);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Failed to load manufacturer data");
      } finally {
        setLoading(false);
      }
    }

    fetchManufacturers();
  }, []);

  return (
    <>
      <PageBanner
        title="MANUFACTURER INFO"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Manufacturer Info" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Info Notice */}
          <Card className="border-none shadow-md bg-[#1B3C73] text-white mb-10">
            <CardContent className="p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <Info className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">Note</h3>
                <p className="text-blue-200/80 text-sm leading-relaxed">
                  To identify the manufacturing unit address, please refer the first character of
                  batch number. For Ice Cream products, refer the first character of batch no. For
                  products other than ice cream, refer the last 2 characters of batch no.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Manufacturer Table */}
          <div className="mb-6">
            <p className="text-[#2563EB] font-semibold text-sm tracking-widest uppercase mb-3">
              Manufacturer Details
            </p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0F2847] mb-2">
              MANUFACTURING UNIT INFORMATION
            </h2>
            <p className="text-gray-500 text-sm">
              Complete list of our manufacturing partners and their FSSAI license details.
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 text-[#1B3C73] animate-spin" />
              <span className="ml-3 text-gray-500">Loading manufacturer data...</span>
            </div>
          ) : error ? (
            <Card className="border-none shadow-md bg-red-50">
              <CardContent className="p-6 flex items-center gap-4">
                <AlertCircle className="h-6 w-6 text-red-500" />
                <p className="text-red-600">{error}</p>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#1B3C73] hover:bg-[#1B3C73]">
                      <TableHead className="text-white font-semibold w-24">Code</TableHead>
                      <TableHead className="text-white font-semibold">
                        Manufacturer Name
                      </TableHead>
                      <TableHead className="text-white font-semibold">Address</TableHead>
                      <TableHead className="text-white font-semibold w-52">
                        FSSAI License No.
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {manufacturers.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-10 text-gray-400">
                          No manufacturer records found.
                        </TableCell>
                      </TableRow>
                    ) : (
                      manufacturers.map((m, index) => (
                        <TableRow
                          key={m.id}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <TableCell>
                            <Badge
                              variant="outline"
                              className="border-[#1B3C73] text-[#1B3C73] font-bold"
                            >
                              {m.code}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-medium text-[#0F2847]">
                            {m.name}
                          </TableCell>
                          <TableCell className="text-gray-600 text-sm">
                            {m.address}
                          </TableCell>
                          <TableCell>
                            <code className="text-xs bg-gray-100 px-2 py-1 rounded text-[#1B3C73] font-mono">
                              {m.license_no}
                            </code>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </Card>
          )}
        </div>
      </section>
    </>
  );
}
