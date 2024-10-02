import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

export default function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 w-44">
        <DropdownMenuLabel>Menú</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <a href="/about">Acerca de</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="/contact">Contacto</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="/menu">Productos</a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <Button className="w-full" asChild>
          <a href="/auth/login">Acceder</a>
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
