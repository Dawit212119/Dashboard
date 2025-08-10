import CardComponent from "@/components/Card";
import SheetComponent from "@/components/Sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BadgeCheck, Candy } from "lucide-react";
import React from "react";
import DemoPage from "../payment/page";

const userProfile = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/Dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/Users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="">Dawit Workye</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex max-xl:flex-col gap-6 mt-4 w-full">
        <div className="flex flex-col w-1/3 gap-3">
          <div className="bg-primary-foreground p-4 rounded-xl">
            <h1 className="font-bold text-xl">User Badges</h1>
            <div className="flex gap-3 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck className="bg-green-500 rounded-full" />{" "}
                </HoverCardTrigger>
                <HoverCardContent>This user is Verfied!</HoverCardContent>
              </HoverCard>{" "}
              <HoverCard>
                <HoverCardTrigger>
                  <Candy className="bg-blue-500 rounded-full" />{" "}
                </HoverCardTrigger>
                <HoverCardContent>
                  The React Framework – created and maintained by @vercel.
                </HoverCardContent>
              </HoverCard>{" "}
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck className="bg-red-500 rounded-full" />{" "}
                </HoverCardTrigger>
                <HoverCardContent>
                  The React Framework – created and maintained by @vercel.
                </HoverCardContent>
              </HoverCard>{" "}
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck className="bg-amber-500 rounded-full" />{" "}
                </HoverCardTrigger>
                <HoverCardContent>
                  The React Framework – created and maintained by @vercel.
                </HoverCardContent>
              </HoverCard>{" "}
            </div>
          </div>
          <div className="bg-primary-foreground mt-3 p-4 rounded-xl">
            <div className="flex flex-col space-y-6">
              <div className="flex justify-around">
                <h1 className="font-bold text-xl capitalize">
                  User information
                </h1>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">Update</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Update Your Profile</SheetTitle>
                    </SheetHeader>
                    <SheetComponent />
                  </SheetContent>
                </Sheet>
              </div>
              <div className="flex flex-col space-y-3">
                <p className="text-sm text-slate-500">profile progress</p>
                <Progress value={33} className="space-y-4" />
                <div className="flex gap-2">
                  <span className="text-sm font-bold">UserName :</span>
                  <span className="text-sm"> Dawit</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-sm font-bold">Email :</span>
                  <span className="text-sm"> dawitworkye794@gmail.com</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-sm font-bold">Role :</span>
                  <span className="text-sm"> User</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-xl">
            <CardComponent />
          </div>
        </div>
        <div className="flex flex-col w-2/3 bg-primary-foreground">
          {" "}
          <div className="px-10 mt-10">
            {" "}
            <DemoPage />
          </div>
        </div>
      </div>
    </>
  );
};

export default userProfile;
