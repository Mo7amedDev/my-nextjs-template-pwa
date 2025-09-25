'use client';
import { useState } from 'react';
import { Menu, Settings, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import NavLinks from './nav-links';
import { useTranslations } from 'next-intl';
import { Button } from '../button';


export default function DashboardSidebar() {
  const t = useTranslations('')
  const [open, setOpen] = useState(false);

  return (
    <div>

      <div className='flex flex-col justify-between h-full pb-10'>
        {/* Mobile: hamburger menu */}
        {/* <div className="md:hidden p-4">
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

             
              <div className='flex flex-col h-full justify-between'>
                <nav className="flex flex-col gap-2 mt-6">
                  <NavLinks />
                </nav>
                <Button><Settings />Settings</Button>
              </div>

            </SheetContent>
          </Sheet>
        </div> */}

        {/* Desktop sidebar */}
        <div className='hidden md:flex flex-col justify-between h-full'>
          <aside className="flex-col w-64 overflow-auto  border-r px-4 py-6">
            <h2 className="text-xl font-bold mb-6">My Logo</h2>
            <nav className="flex flex-col gap-2">
              <NavLinks />
            </nav>
          </aside>
          <Button>
            <Settings />
            Settings
          </Button>
        </div>

      </div>


    </div>
  );
}
