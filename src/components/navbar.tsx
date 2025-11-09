import { FC } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NAV_LINKS } from "@/constants/navlinks";
import { ModeToggle } from "./toggle-theme";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 backdrop-blur-sm">
      <NavigationMenu>
        <NavigationMenuList className="">
          {NAV_LINKS.map((link) => (
            <NavigationMenuItem key={link.id}>
              <NavigationMenuLink href={link.href} className="font-medium">
                {link.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </nav>
  );
};
