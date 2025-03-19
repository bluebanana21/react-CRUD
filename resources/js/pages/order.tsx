'use client';

import { AppSidebar } from '@/components/app-sidebar';
import { ModeToggle } from '@/components/mode-toggle';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { columns, Payment } from '@/orders/columns';
import { DataTable } from '@/orders/data-table';
import { Separator } from '@radix-ui/react-separator';
import { useEffect, useState } from 'react';

// async function getData(): Promise<Payment[]> {
//     // Fetch data from Laravel API
//     const response = await fetch('/api/payments'); // Update with actual API route
//     return response.json();
// }
async function getData(): Promise<Payment[]> {
    return [
        {
            id: 'id8171',
            product_id: 'pd8216',
            customer_id: 'cd72161',
            product_qty: 12,
            created_at: '12/1/2025',
        },
        {
            id: 'id8171',
            product_id: 'pd8216',
            customer_id: 'cd72161',
            product_qty: 12,
            created_at: '12/1/2025',
        },
        {
            id: 'id8171',
            product_id: 'pd8216',
            customer_id: 'cd72161',
            product_qty: 12,
            created_at: '12/1/2025',
        },
        {
            id: 'id8171',
            product_id: 'pd8216',
            customer_id: 'cd72161',
            product_qty: 12,
            created_at: '12/1/2025',
        },
        {
            id: 'id8171',
            product_id: 'pd8216',
            customer_id: 'cd72161',
            product_qty: 12,
            created_at: '12/1/2025',
        },

        // ...
    ];
}

export default function Product() {
    const [data, setData] = useState<Payment[]>([]);

    useEffect(() => {
        getData().then(setData).catch(console.error);
    }, []);

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Order page</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <ModeToggle />
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                    </div>
                    <div className="bg-muted/50 min-h-[50vh] flex-1 rounded-xl md:min-h-min">
                        <DataTable columns={columns} data={data} />
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
