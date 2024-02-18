import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import { logo } from "../assets";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  const menuItems = ["Log In", "Catelog", "Ordering"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={true}
      maxWidth="full"
      height={"7rem"}
      className="gradientHeader"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img
            src={logo}
            width={100}
            height={100}
            className="w-full max-w-[60px] sm:max-w-[80px]"
            alt="logo"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        <NavbarItem>
          <Link className="text-white" href="/">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/catelog" className="text-white" aria-current="page">
            Catelog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Ordering
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="text-white">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-webDarkBlue text-white"
            href="#"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
