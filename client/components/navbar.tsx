import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import {
  GithubIcon,
  HeartFilledIcon,
} from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar className="bg-slate-800 dark:text-white text-white" maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full dark:text-white text-white" justify="start">
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium dark:text-white text-white",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full dark:text-white text-white"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2 dark:text-white text-white">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex dark:text-white text-white">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal bg-gray-950 dark:text-white text-white"
            href={siteConfig.links.github}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Contribute
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4 dark:text-white text-white" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="dark:text-white text-white" />
        </Link>
        <NavbarMenuToggle />
      </NavbarContent>
    </NextUINavbar>
  );
};
