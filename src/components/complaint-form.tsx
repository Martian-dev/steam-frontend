"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Upload } from "lucide-react";

export function ComplaintForm() {
  return (
    <section id="complaint-form" className="py-20 isolate">
      <div className="container max-w-3xl text-center mx-auto">
        <h2 className="text-3xl font-bold text-[#3B4B8C] mb-4">
          Register complaints through a personalised form
        </h2>
        <p className="text-gray-600 mb-12">
          Empowering users to report water-related issues like pollution,
          stagnation, or contamination effortlessly.
        </p>

        <Card className="bg-[#B7C4FF]/20 backdrop-blur">
          <CardContent className="p-6">
            <form className="space-y-6">
              <div className="space-y-2 text-left">
                <label className="text-[#3B4B8C] font-medium">Name</label>
                <Input placeholder="Enter your name" className="bg-white" />
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[#3B4B8C] font-medium">
                  Location (Set on Google Maps)
                </label>
                <div className="relative">
                  <Input
                    placeholder="Select location"
                    className="bg-white pl-10"
                  />
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[#3B4B8C] font-medium">Issue Type</label>
                <Select>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select type of issue" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pollution">Water Pollution</SelectItem>
                    <SelectItem value="stagnation">Water Stagnation</SelectItem>
                    <SelectItem value="contamination">Contamination</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[#3B4B8C] font-medium">
                  Upload Photo
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-white">
                  <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">
                    Click to upload or drag and drop
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                className="bg-[#6B7FD7] hover:bg-[#5668C0] text-white w-full"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
