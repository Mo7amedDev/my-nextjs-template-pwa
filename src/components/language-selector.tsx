import { Globe } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function LanguageSelector() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Globe className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                    <a href="/en">English</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <a href="/es">Español</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <a href="/fr">Français</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <a href="/ar">Arabic</a>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}