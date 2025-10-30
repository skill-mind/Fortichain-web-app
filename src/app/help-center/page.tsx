"use client";
import Image from "next/image";
import logo from "../../../public/Logo (2).svg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { useState } from "react";
import toast from "react-hot-toast";
export default function Help() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate required fields
    if (!formData.email || !formData.message) {
      toast.error("Email and message are required");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            user_id: PUBLIC_KEY,
            template_params: {
              name: formData.name || "Anonymous",
              email: formData.email,
              message: formData.message,
            },
          }),
        }
      );

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
      toast.success("Message sent succesfully");
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Nav />
      <section className="grid gap-6 px-6 my-36">
        <div className="text-center mt-14">
          <h1 className="text-[32px]">How Can We Help You</h1>
          <p className="text-gray-text text-18">
            Tell us more about your needs so we can help you
          </p>
        </div>

        <form
          className="bg-dark-gray p-6 rounded-[8px] w-[95%] sm:max-w-2xl mx-auto grid gap-6"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Enter your name"
            value={formData.name}
            id="name"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            className="w-full px-6  py-7 rounded-full border border-dark-border-gray"
          />
          <Input
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            className="w-full px-6  py-7 rounded-full border border-dark-border-gray"
          />
          <Textarea
            className="border border-dark-border-gray min-h-[400px] pt-3"
            placeholder="Enter your message..."
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                message: e.target.value,
              }))
            }
          />
          <button
            type="submit"
            disabled={isLoading}
            className="disabled:cursor-not-allowed sm:min-w-[258px] mx-auto min-h-50 p-0.5 group 
         bg-sky-blue-border
         hover:bg-sky-blue-border
     rounded-full group w-full sm:w-fit"
          >
            <span
              className="px-6 py-3
             from-sky-from to-sky-to group-disabled:cursor-not-allowed
             bg-gradient-to-r
         flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
            >
              {!isLoading ? " Submit" : "submitting....."}
            </span>
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}
