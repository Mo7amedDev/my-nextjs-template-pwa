'use client'
import clsx from 'clsx';
import { File, HomeIcon, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
/* const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Invoices',href: '/dashboard/invoices',icon: File,},
  { name: 'Customers', href: '/dashboard/customers', icon: User },
]; */

const links = [
  { name: 'Dashboard', href: '/dashboard' , icon: HomeIcon  },
  { name: 'Inventory', href: '/inventory' , icon: HomeIcon },
  { name: 'Purchase', href: '/purchase' , icon: HomeIcon },
  { name: 'Invoices', href: '/invoices' , icon: HomeIcon },
  { name: 'Create Invoice', href: '/invoices/create' , icon: HomeIcon },
  { name: 'Clients', href: '/clients' , icon: HomeIcon },
  { name: 'Low Stock', href: '/low-stock' , icon: HomeIcon },
];


export default function NavLinks() {
  const pathname = usePathname();
  
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('flex px-4 py-2 text-white rounded-md transition-colors hover:bg-muted hover:text-foreground gap-2 items-center ',{
              'bg-primary text-white': pathname === link.href
            })}
          >
            <LinkIcon className="w-6" />
            <p >{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
