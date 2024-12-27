"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Megaphone } from "lucide-react";

export function Navbar() {
  return (
    <div className="w-full py-4 px-6 z-30">
      <div className="container mx-auto">
        <div className="bg-[#3B4B8C] text-white py-2 px-4 rounded-full shadow-lg flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            STEAM
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href="/why-steam"
                  className="px-4 py-2 hover:text-blue-200"
                >
                  Why STEAM?
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-blue-200 hover:bg-transparent focus:bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2 bg-[#3B4B8C] text-white rounded-lg shadow-lg">
                    <Link
                      href="/services/tracking"
                      className="flex p-2 hover:bg-[#6B7FD7] rounded"
                    >
                      Polution Heatmap
                    </Link>
                    <Link
                      href="/services/analysis"
                      className="flex p-2 hover:bg-[#6B7FD7] rounded gap-2"
                    >
                      <Megaphone className="size-6" />
                      Report Issue
                    </Link>
                    <Link
                      href="/services/analysis"
                      className="p-2 hover:bg-[#6B7FD7] rounded flex gap-2"
                    >
                      Track Complaints
                    </Link>
                    <Link
                      href="/services/analysis"
                      className="flex p-2 hover:bg-[#6B7FD7] rounded"
                    >
                      Collaborate
                    </Link>
                    <Link
                      href="/services/analysis"
                      className="flex p-2 hover:bg-[#6B7FD7] rounded"
                    >
                      Community
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" className="px-4 py-2 hover:text-blue-200">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="bg-[#6B7FD7] hover:bg-[#5668C0] text-white rounded-full">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
