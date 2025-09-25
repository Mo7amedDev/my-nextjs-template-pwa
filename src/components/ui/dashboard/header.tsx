'use client';

import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../sheet";
import { ListStartIcon, MagnetIcon, Menu, Settings } from "lucide-react";
import NavLinks from "./nav-links";
import ThemeSelector from "@/components/theme-selector";
import LanguageSelector from "@/components/language-selector";
import { Button } from "../button";

export function Logo() {
    return <div>My Logo</div>
}

export default function Header() {

    const [open, setOpen] = useState(false)
    const isRtl = false;

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background px-4 py-3 flex items-center justify-between">
            <div className=' md:hidden'>
                <div className="md:hidden p-4">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <button className="p-2 rounded-md border hover:bg-muted">
                                <Menu className="h-5 w-5" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-64 p-4">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>

                            {/* <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4"
            >
              <X className="w-5 h-5" />
            </button> */}
                            <div className='flex flex-col h-full justify-between'>
                                <nav className="flex flex-col gap-2 mt-6">
                                    <NavLinks />
                                </nav>
                                <Button><Settings />Settings</Button>
                            </div>

                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className='hidden md:block'>
                <Logo />
            </div>
            <div className='flex gap-2 items-center'>
                <Button><ListStartIcon />Upgrade Now</Button>
                <ThemeSelector />
                <LanguageSelector />

            </div>
            {/* <span className="font-semibold">WoodStock.ma</span> */}
        </header>
    );
}
