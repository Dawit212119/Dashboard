"use client";
import React, { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { ScrollArea } from "./ui/scroll-area";
import { Popover, PopoverContent } from "./ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const CalanderComponent = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline">
            {" "}
            {date ? format(new Date(date), "yyyy-MM-dd") : "Pick A Date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="center" sideOffset={23}>
          <Calendar
            mode="single"
            required
            selected={date}
            onSelect={setDate}
            className="rounded-lg border"
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="max-h-[400px] overflow-y-auto">
        <div className="grid gap-2">
          <Card className="px-3">
            <div className="flex items-center gap-2">
              <Checkbox id="item1" />
              <Label htmlFor="item1" className="text-sm">
                Accept the Terms and Conditions
              </Label>
            </div>
          </Card>
          <Card className="px-3">
            <div className="flex items-center gap-2">
              <Checkbox id="item1" />
              <Label htmlFor="item1" className="text-sm">
                Accept the Terms and Conditions
              </Label>
            </div>
          </Card>
          <Card className="px-3">
            <div className="flex items-center gap-2">
              <Checkbox id="item1" />
              <Label htmlFor="item1" className="text-sm">
                Accept the Terms and Conditions
              </Label>
            </div>
          </Card>
          <Card className="px-3">
            <div className="flex items-center gap-2">
              <Checkbox id="item1" />
              <Label htmlFor="item1" className="text-sm">
                Accept the Terms and Conditions
              </Label>
            </div>
          </Card>
          <Card className="px-3">
            <div className="flex items-center gap-2">
              <Checkbox id="item1" />
              <Label htmlFor="item1" className="text-sm">
                Accept the Terms and Conditions
              </Label>
            </div>
          </Card>
          <Card className="px-3">
            <div className="flex items-center gap-2">
              <Checkbox id="item1" />
              <Label htmlFor="item1" className="text-sm">
                Accept the Terms and Conditions
              </Label>
            </div>
          </Card>
          <Card className="px-3">
            <div className="flex items-center gap-2">
              <Checkbox id="item1" />
              <Label htmlFor="item1" className="text-sm">
                Accept the Terms and Conditions
              </Label>
            </div>
          </Card>
          <Card className="px-3">
            <div className="flex items-center gap-2">
              <Checkbox id="item1" />
              <Label htmlFor="item1" className="text-sm">
                Accept the Terms and Conditions
              </Label>
            </div>
          </Card>
          <Card className="px-3">
            <div className="flex items-center gap-2">
              <Checkbox id="item1" />
              <Label htmlFor="item1" className="text-sm">
                Accept the Terms and Conditions
              </Label>
            </div>
          </Card>{" "}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CalanderComponent;
