"use client";
import React, { useState, useRef } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "@nextui-org/input";
import { toast } from "react-toastify"; // Import Toastify

export function SignupFormDemo() {
  const [state, setState] = useState<string>();
  const formRef = useRef<HTMLFormElement>(null); // Reference for the form

  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setState("loading");

    const formData = {
      firstName: (document.getElementById("firstname") as HTMLInputElement).value,
      phoneNumber: (document.getElementById("phone") as HTMLInputElement).value,
      service: (document.getElementById("service") as HTMLSelectElement).value,
      message: (document.getElementById("des") as HTMLTextAreaElement).value,
    };

    console.log("Form submitted with data:", formData); // Check formData in the console

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Response from server:", result); // Log the server's response

      if (response.ok) {
        console.log(`Email successfully sent with data.`); // Change log message
        setState("ready");

        // Reset the form
        if (formRef.current) {
          formRef.current.reset();
        }

        // Show success notification
        toast.success("Submitted successfully."); // Show Toast notification
      } else {
        console.log(`Failed to send email.`); // Change log message
        setState("error");
      }
    } catch (error) {
      console.error("Error occurred while sending email:", error);
      setState("error");
    }
  }

  return (
    <div style={{ position: "relative" }}>
      <form ref={formRef} onSubmit={handleOnSubmit} className="my-8" id="form">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="flex-1">
            <Label htmlFor="firstname">Ime</Label>
            <Input id="firstname" placeholder="Vaše Ime" type="text" required />
          </div>
          <div className="flex-1">
            <Label htmlFor="phone">Telefon</Label>
            <Input id="phone" placeholder="Vaš Telefona/Mobitel" type="tel" required />
          </div>
        </div>

        <div className="mb-4">
          <Label htmlFor="service">Usluga</Label>
          <select id="service" className="border p-2 rounded w-full" required>
            <option value="massage">Masaža</option>
            <option value="laser-removal">Trajno Uklanjanje Dlačica Diodnim Laserom</option>
          </select>
        </div>

        <div className="mb-8">
          <Label htmlFor="des">Poruka</Label>
          <Textarea id="des" placeholder="SMS poruku" className="p-2 rounded w-full" minRows={3} />
        </div>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={state === "loading"}
        >
          {state === "loading" ? "Submitting..." : "Submit →"}
        </button>
      </form>
    </div>
  );
}
