"use client";

import * as React from "react";
import Link from "next/link";
import { Abril_Fatface, Climate_Crisis, Platypi } from "next/font/google";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { twMerge } from "tailwind-merge";

const climate = Climate_Crisis({ subsets: ["latin"] });
const abril = Abril_Fatface({ subsets: ["latin"], weight: "400" });
const platypi = Platypi({ subsets: ["latin"] });

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const aboutUsComponents: {
  title: string;
  href: string;
}[] = [
  {
    title: "Team",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "How we work",
    href: "/docs/primitives/hover-card",
  },
];

const Topnav = () => {
  return (
    <div className="px-32 py-10 bg-milk flex flex-row justify-between items-center">
      <div className={twMerge(`${abril.className}`, "text-5xl")}>
        Dentologie
      </div>
      <div className="font-platypi">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4 md:w-[200px] md:grid-cols-1 lg:w-[200px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {/* {component.description} */}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl">
                Locations
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4 md:w-[200px] md:grid-cols-1 lg:w-[200px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {/* {component.description} */}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl">
                About Us
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4 md:w-[200px] md:grid-cols-1 lg:w-[200px] ">
                  {aboutUsComponents.map((aboutUsComponents) => (
                    <ListItem
                      key={aboutUsComponents.title}
                      title={aboutUsComponents.title}
                      href={aboutUsComponents.href}
                    >
                      {/* {component.description} */}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className="text-xl">
                  Careers
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <button className="bg-milk rounded-full border-3 text-sm border-black py-3 px-16 font-extrabold hover:bg-black hover:border-orange-300 hover:text-orange-300">
          BOOK
        </button>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Topnav;
