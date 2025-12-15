"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  className?: string;
  mode?: string; // For compatibility, ignored
}

function Calendar({ selected, onSelect, className, ...props }: CalendarProps) {
  return (
    <input
      type="date"
      value={selected ? selected.toISOString().split("T")[0] : ""}
      onChange={(e) =>
        onSelect?.(e.target.value ? new Date(e.target.value) : undefined)
      }
      className={cn("rounded-md border p-3", className)}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
