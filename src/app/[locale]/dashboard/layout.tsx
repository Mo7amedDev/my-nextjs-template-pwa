import AuthProvider from "@/app/providers/auth-provider"
import DashboardSidebar from "@/components/ui/dashboard/dashboard-sidebar"
import Header from "@/components/ui/dashboard/header"
 
import { authOptions } from "@/lib/auth/auth.config"

import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function PublicLayout({children}:{children: React.ReactNode,}
) {

    //const session = await getServerSession(authOptions);

    return (
        <div className="h-screen flex flex-col"> {/* full height layout */}
            <Header />
            <div className="flex flex-1 overflow-hidden"> {/* sidebar + content wrapper */}
                <DashboardSidebar />
                <main className="flex-1 flex-col overflow-y-auto p-4">
                    {children}
                </main>
            </div>
        </div>

    )
}