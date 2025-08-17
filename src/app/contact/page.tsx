"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContactEmail } from "@/features/contact/actions/contact";
import { contactSchema } from "@/features/contact/schemas/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data: ContactFormValues) => {
    sendContactEmail(data);
  };

  return (
    <div className="font-body mx-auto grid max-w-5xl grid-cols-12 p-5 md:gap-8 md:p-10">
      <div className="col-span-5 md:col-span-3">
        <Image
          src="/contact/phone-avatar.png"
          width={1024}
          height={1394}
          alt=""
          className="w-9/10"
          priority
        />
      </div>
      <div className="col-span-12 md:col-span-9 lg:col-span-7">
        <Form {...form}>
          <h1 className="text-heading mb-4 font-sans text-3xl font-semibold">
            Let&apos;s Connect
          </h1>
          <div className="text-body mb-8 text-lg">
            You can reach me directly at{" "}
            <a
              href="mailto:lun.tay.work@gmail.com"
              className="text-heading font-medium underline hover:no-underline"
            >
              lun.tay.work@gmail.com
            </a>{" "}
            or on my phone:{" "}
            <a
              href="tel:+6593656675"
              className="text-heading font-medium underline hover:no-underline"
            >
              +65 9365 6675
            </a>
            , or simply fill out the form below.
          </div>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-gray-100" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-gray-100 text-2xl" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={15}
                      {...field}
                      className="h-32 bg-gray-100"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
