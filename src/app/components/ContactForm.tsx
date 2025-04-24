"use client";

import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { cn } from "@/app/lib/utils";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Your email has been sent");
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 bg-white text-black rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold mb-8 text-center">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            className="placeholder:text-gray-400"
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="johndoe@example.com"
            className="placeholder:text-gray-400"
            required
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 9876543210"
            className="placeholder:text-gray-400"
          />
        </div>

        <div>
          <Label htmlFor="purpose">Purpose</Label>
          <select
            id="purpose"
            name="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            required
            className="w-full h-10 px-3 py-2 rounded-md border bg-white text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none"
          >
            <option value="" disabled>Select a purpose</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Cloud">Cloud</option>
          </select>
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 rounded-md border bg-white text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none"
            rows={5}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 bg-black text-white border border-transparent hover:border-white transition duration-300 rounded-md"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
