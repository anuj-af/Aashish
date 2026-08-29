"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { getSupabaseClient, type Manufacturer } from "@/lib/supabase";
import {
  Plus,
  Pencil,
  Trash2,
  LogOut,
  Loader2,
  AlertCircle,
  Factory,
  LayoutDashboard,
  RefreshCw,
} from "lucide-react";

const emptyForm = { code: "", name: "", address: "", license_no: "" };

export default function AdminDashboard() {
  const router = useRouter();
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const isAdmin = sessionStorage.getItem("aashish_admin");
    if (!isAdmin) {
      router.push("/admin");
      return;
    }
    fetchManufacturers();
  }, [router]);

  async function fetchManufacturers() {
    setLoading(true);
    setError(null);
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from("manufacturers")
        .select("*")
        .order("code", { ascending: true });
      if (error) throw error;
      setManufacturers(data || []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to load data");
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    if (!formData.code || !formData.name || !formData.address || !formData.license_no) {
      setError("All fields are required.");
      return;
    }

    setSaving(true);
    setError(null);
    try {
      const supabase = getSupabaseClient();
      if (editingId) {
        const { error } = await supabase
          .from("manufacturers")
          .update(formData)
          .eq("id", editingId);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("manufacturers").insert([formData]);
        if (error) throw error;
      }
      setDialogOpen(false);
      setFormData(emptyForm);
      setEditingId(null);
      await fetchManufacturers();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!deletingId) return;
    setSaving(true);
    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase
        .from("manufacturers")
        .delete()
        .eq("id", deletingId);
      if (error) throw error;
      setDeleteDialogOpen(false);
      setDeletingId(null);
      await fetchManufacturers();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to delete");
    } finally {
      setSaving(false);
    }
  }

  function openEdit(m: Manufacturer) {
    setFormData({
      code: m.code,
      name: m.name,
      address: m.address,
      license_no: m.license_no,
    });
    setEditingId(m.id);
    setDialogOpen(true);
    setError(null);
  }

  function openCreate() {
    setFormData(emptyForm);
    setEditingId(null);
    setDialogOpen(true);
    setError(null);
  }

  function handleLogout() {
    sessionStorage.removeItem("aashish_admin");
    router.push("/admin");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-[#1B3C73] shadow-lg">
        <div className="container mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="Aashish Logo"
              width={36}
              height={36}
              className="h-9 w-auto rounded-md"
            />
            <div className="flex items-center gap-2">
              <LayoutDashboard className="h-5 w-5 text-blue-200" />
              <span className="text-white font-semibold">Admin Dashboard</span>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-[#1B3C73] gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <Card className="border-none shadow-md">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Factory className="h-6 w-6 text-[#1B3C73]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0F2847]">{manufacturers.length}</p>
                <p className="text-gray-500 text-sm">Total Manufacturers</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <Badge className="bg-[#65A30D] text-white text-xs">Active</Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0F2847]">{manufacturers.length}</p>
                <p className="text-gray-500 text-sm">Active Records</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0F2847]">FSSAI</p>
                <p className="text-gray-500 text-sm">Licensed & Certified</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Table Card */}
        <Card className="border-none shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-xl font-bold text-[#0F2847]">
                Manufacturer Records
              </CardTitle>
              <p className="text-gray-500 text-sm mt-1">
                Manage all manufacturer details and FSSAI licenses
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={fetchManufacturers}
                className="gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh
              </Button>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger >
                  <Button
                    size="sm"
                    onClick={openCreate}
                    className="bg-[#1B3C73] hover:bg-[#0F2847] text-white gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add New
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle>
                      {editingId ? "Edit Manufacturer" : "Add New Manufacturer"}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    {error && (
                      <div className="flex items-center gap-2 bg-red-50 text-red-600 text-sm p-3 rounded-lg">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        {error}
                      </div>
                    )}
                    <div className="space-y-2">
                      <Label>Code</Label>
                      <Input
                        placeholder="e.g., 01"
                        value={formData.code}
                        onChange={(e) =>
                          setFormData({ ...formData, code: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Manufacturer Name</Label>
                      <Input
                        placeholder="Full manufacturer name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Complete Address</Label>
                      <Textarea
                        placeholder="Full address with pin code"
                        rows={3}
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>FSSAI License No.</Label>
                      <Input
                        placeholder="FSSAI License Number"
                        value={formData.license_no}
                        onChange={(e) =>
                          setFormData({ ...formData, license_no: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose >
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button
                      onClick={handleSave}
                      disabled={saving}
                      className="bg-[#1B3C73] hover:bg-[#0F2847] text-white gap-2"
                    >
                      {saving && <Loader2 className="h-4 w-4 animate-spin" />}
                      {editingId ? "Update" : "Create"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="h-8 w-8 text-[#1B3C73] animate-spin" />
                <span className="ml-3 text-gray-500">Loading records...</span>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold w-20">Code</TableHead>
                      <TableHead className="font-semibold">Name</TableHead>
                      <TableHead className="font-semibold">Address</TableHead>
                      <TableHead className="font-semibold w-44">License No.</TableHead>
                      <TableHead className="font-semibold w-28 text-right">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {manufacturers.length === 0 ? (
                      <TableRow>
                        <TableCell
                          colSpan={5}
                          className="text-center py-16 text-gray-400"
                        >
                          <Factory className="h-10 w-10 mx-auto mb-3 text-gray-300" />
                          <p>No manufacturer records found.</p>
                          <p className="text-sm">Click &ldquo;Add New&rdquo; to create one.</p>
                        </TableCell>
                      </TableRow>
                    ) : (
                      manufacturers.map((m) => (
                        <TableRow key={m.id} className="hover:bg-gray-50">
                          <TableCell>
                            <Badge
                              variant="outline"
                              className="border-[#1B3C73] text-[#1B3C73] font-bold"
                            >
                              {m.code}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-medium text-[#0F2847] max-w-xs">
                            <p className="truncate">{m.name}</p>
                          </TableCell>
                          <TableCell className="text-gray-600 text-sm max-w-sm">
                            <p className="truncate">{m.address}</p>
                          </TableCell>
                          <TableCell>
                            <code className="text-xs bg-gray-100 px-2 py-1 rounded font-mono">
                              {m.license_no}
                            </code>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => openEdit(m)}
                                className="h-8 w-8 text-[#1B3C73] hover:bg-blue-50"
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => {
                                  setDeletingId(m.id);
                                  setDeleteDialogOpen(true);
                                }}
                                className="h-8 w-8 text-red-500 hover:bg-red-50"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
          </DialogHeader>
          <p className="text-gray-600 text-sm">
            Are you sure you want to delete this manufacturer record? This action cannot be
            undone.
          </p>
          <DialogFooter>
            <DialogClose >
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={saving}
              className="gap-2"
            >
              {saving && <Loader2 className="h-4 w-4 animate-spin" />}
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
