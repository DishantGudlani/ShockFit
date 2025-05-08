"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { NavConfig } from "../../types/Nav";

interface MobileNavProps {
  config: NavConfig;
}

export function MobileNav({ config }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          {config.navItems.map((item, index) =>
            item.label === "Usluge" ? (
              <Accordion
                key={index}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value="services">
                  <AccordionTrigger>Usluge</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      {config.services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setOpen(false)}
                          className="text-sm hover:underline"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                key={index}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium hover:underline"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}