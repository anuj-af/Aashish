"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageBanner from "@/components/PageBanner";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  AtSign,
  Share2,
  Rss,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ firstName: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <PageBanner
        title="CONTACT"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <div>
              <p className="text-[#2563EB] font-semibold text-sm tracking-widest uppercase mb-3">
                Contact Us
              </p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F2847] mb-6">
                GET IN TOUCH
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                Have questions about our products or want to place a bulk order?
                Reach out to us and we&apos;ll be happy to help.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {[
                  {
                    icon: MapPin,
                    title: "Location",
                    info: "23, Ware House Road, Siyaganj, Indore (M.P.) - 452007",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    info: "9009200014",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    info: "impexaashish@gmail.com",
                  },
                  {
                    icon: Clock,
                    title: "Work Hours",
                    info: "Mon - Sat: 9:00 AM - 6:00 PM",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-[#1B3C73]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0F2847] text-sm">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="font-semibold text-[#0F2847] text-sm mb-3">Social Media:</p>
                <div className="flex gap-3">
                  {[Globe, AtSign, Share2, Rss].map((Icon, i) => (
                    <button
                      key={i}
                      className="w-10 h-10 rounded-full bg-[#1B3C73] flex items-center justify-center hover:bg-[#2563EB] transition-colors"
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#0F2847]">
                  Leave A Message
                </CardTitle>
                <p className="text-gray-500 text-sm">
                  Fill in the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Your name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        placeholder="Your phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#1B3C73] hover:bg-[#0F2847] text-white rounded-full py-6 font-semibold"
                  >
                    <Send className="h-4 w-4 mr-2" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2!2d75.857!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEwLjYiTiA3NcKwNTEnMjUuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale-[30%]"
        />
      </section>

      {/* Info Bar */}
      <section className="bg-[#1B3C73] py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Phone, title: "Give Us A Call", info: "9009200014" },
              { icon: Mail, title: "Email Address", info: "impexaashish@gmail.com" },
              { icon: MapPin, title: "Office Location", info: "Siyaganj, Indore (M.P.)" },
              { icon: Clock, title: "Work Hours", info: "Mon-Sat: 9AM - 6PM" },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-blue-200/70 text-xs">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
