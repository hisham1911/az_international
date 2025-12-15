"use client";

import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/api-services";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      await sendEmail(formData);
      setIsSuccess(true);
      toast.success("Your message has been sent successfully!");
      setFormData({
        userName: "",
        userEmail: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        "An error occurred while sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <FadeIn>
        <h1 className="mb-6 text-center text-3xl font-bold md:text-4xl">
          Contact Us
        </h1>
      </FadeIn>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Contact Form */}
        <FadeIn direction="right" delay={200}>
          <Card className="shadow-md transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <h2 className="mb-6 text-2xl font-semibold">Send Us a Message</h2>

              {isSuccess ? (
                <div className="py-8 text-center">
                  <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-green-500" />
                  <h3 className="mb-2 text-xl font-semibold text-green-600">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We will get back to you soon.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="userName" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="userEmail"
                        className="text-sm font-medium"
                      >
                        Email Address
                      </label>
                      <Input
                        id="userEmail"
                        name="userEmail"
                        type="email"
                        value={formData.userEmail}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      required
                      className="min-h-[150px] transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </FadeIn>

        {/* Contact Information */}
        <FadeIn direction="left" delay={400}>
          <div className="space-y-8">
            <Card className="shadow-md transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <h2 className="mb-6 text-2xl font-semibold">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="mt-1 h-6 w-6 text-blue-600" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-gray-600">
                        33 Gamal El-Deen Kassem St., Nasr City, Cairo, Egypt
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="mt-1 h-6 w-6 text-blue-600" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">(02) 22-8-79-691</p>
                    </div>
                  </div>{" "}
                  <div className="flex items-start space-x-4">
                    <Mail className="mt-1 h-6 w-6 text-blue-600" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">
                        info@azinternational-eg.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center text-blue-600">
                      🌐
                    </div>
                    <div>
                      <h3 className="font-medium">Website</h3>
                      <p className="text-gray-600">
                        www.azinternational-eg.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="mt-1 h-6 w-6 text-blue-600" />
                    <div>
                      <h3 className="font-medium">Working Hours</h3>
                      <p className="text-gray-600">
                        Sunday - Thursday: 9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
