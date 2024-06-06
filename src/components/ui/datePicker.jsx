"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarDaysIcon, Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";

export function DatePicker() {
  const [date, setDate] = React.useState();

  return (
    <div className="grid gap-1.5">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className=" justify-start text-left font-normal"
          >
            <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
            Pick a date
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar selected={date} mode="single" initialFocus />
        </PopoverContent>
      </Popover>
    </div>
  );
}
