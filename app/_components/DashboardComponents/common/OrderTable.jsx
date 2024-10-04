import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

const OrderTable = () => {
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">New Order</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-bold">
                            Wedding Decoration
                        </TableCell>
                        <TableCell className="hidden font-bold sm:block">
                            {'05/05/2024'}
                        </TableCell>
                        <TableCell className="text-right">
                            <Link
                                className="font-bold text-primary hover:text-primary/90 hover:underline"
                                href={'/dashboard/vendor'}
                            >
                                View Details
                            </Link>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-bold">
                            Wedding Decoration
                        </TableCell>
                        <TableCell className="hidden font-bold sm:block">
                            {'05/05/2024'}
                        </TableCell>
                        <TableCell className="text-right">
                            <Link
                                className="font-bold text-primary hover:text-primary/90 hover:underline"
                                href={'/dashboard/vendor'}
                            >
                                View Details
                            </Link>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-bold">
                            Wedding Decoration
                        </TableCell>
                        <TableCell className="hidden font-bold sm:block">
                            {'05/05/2024'}
                        </TableCell>
                        <TableCell className="text-right">
                            <Link
                                className="font-bold text-primary hover:text-primary/90 hover:underline"
                                href={'/dashboard/vendor'}
                            >
                                View Details
                            </Link>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-bold">
                            Wedding Decoration
                        </TableCell>
                        <TableCell className="hidden font-bold sm:block">
                            {'05/05/2024'}
                        </TableCell>
                        <TableCell className="text-right">
                            <Link
                                className="font-bold text-primary hover:text-primary/90 hover:underline"
                                href={'/dashboard/vendor'}
                            >
                                View Details
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
};

export default OrderTable;
