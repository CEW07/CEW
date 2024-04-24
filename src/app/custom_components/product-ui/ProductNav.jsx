import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu";
const ProductNav = () => {
  return (
    <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem key="products-menu-item">
        <NavigationMenuTrigger className="bg-offwhite text-[1rem] hover:text-newgold ">
          Products
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <div className="mb-2 mt-4 text-lg font-medium">
                    Product List
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Coming soon...!
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  )
}

export default ProductNav