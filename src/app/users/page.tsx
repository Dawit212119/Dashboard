import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { BadgeCheck, Candy } from "lucide-react";
import React from "react";

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
          <div className="bg-primary-foreground p-4 rounded-md">
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
          <div className="bg-primary-foreground mt-3 p-4 rounded-md">
            <div className="flex flex-col space-y-6">
              <h1 className="font-bold text-xl capitalize">User information</h1>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <span>UserName</span>
                  <span> Dawit</span>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex flex-col w-2/3 bg-primary-foreground"></div>
      </div>
    </>
  );
};

export default userProfile;
