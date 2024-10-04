'use client';

import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function SearchComponent() {
    const [selectedValue, setSelectedValue] = useState('');
    const [isBuy, setIsBuy] = useState(true);
    return (
        <div>
            <div className="flex items-center justify-start transition-all delay-300 duration-500">
                <div
                    onClick={() => setIsBuy(!isBuy)}
                    className={`px-5 py-3 transition-all lg:px-8 lg:py-4 ${isBuy ? 'rounded-t-md bg-white text-primary' : 'text-muted'} cursor-pointer`}
                >
                    <p className="font-primary text-sm font-bold sm:text-base">
                        Buy
                    </p>
                </div>
                <div
                    onClick={() => setIsBuy(!isBuy)}
                    className={`px-5 py-3 transition-all lg:px-8 lg:py-4 ${!isBuy ? 'rounded-t-md bg-white text-primary' : 'text-muted'} cursor-pointer`}
                >
                    <p className="font-primary text-sm font-bold sm:text-base">
                        Rent
                    </p>
                </div>
            </div>
            <div
                className={`grid max-w-[800px] grid-cols-1 items-center gap-y-2 rounded-r-md rounded-bl-md bg-white px-5 py-3 shadow-lg sm:grid-cols-12 sm:gap-x-5 lg:gap-x-8 lg:px-7 lg:py-4 ${isBuy ? '' : 'rounded-tl-md'}`}
            >
                <div className="sm:col-span-3">
                    <Label className="font-primary text-base font-medium text-secondary">
                        Location
                    </Label>
                    <Select
                        value={selectedValue}
                        onValueChange={(value) => {
                            console.log(value);
                            setSelectedValue(value);
                        }}
                    >
                        <SelectTrigger
                            className={`border-0 p-0 shadow-none selection:outline-none focus:outline-none focus:ring-0 active:outline-none ${selectedValue ? '!text-secondary' : '!text-muted-foreground'}`}
                        >
                            <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="new-york">New York</SelectItem>
                            <SelectItem value="london">London</SelectItem>
                            <SelectItem value="tokyo">Tokyo</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="sm:col-span-3">
                    <Label className="font-primary text-base font-medium text-secondary">
                        Location
                    </Label>
                    <Select
                        value={selectedValue}
                        onValueChange={(value) => {
                            console.log(value);
                            setSelectedValue(value);
                        }}
                    >
                        <SelectTrigger
                            className={`border-0 p-0 shadow-none selection:outline-none focus:outline-none focus:ring-0 active:outline-none ${selectedValue ? '!text-secondary' : '!text-muted-foreground'}`}
                        >
                            <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="new-york">New York</SelectItem>
                            <SelectItem value="london">London</SelectItem>
                            <SelectItem value="tokyo">Tokyo</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="sm:col-span-3">
                    <Label className="font-primary text-base font-medium text-secondary">
                        Location
                    </Label>
                    <Select
                        value={selectedValue}
                        onValueChange={(value) => {
                            console.log(value);
                            setSelectedValue(value);
                        }}
                    >
                        <SelectTrigger
                            className={`border-0 p-0 shadow-none selection:outline-none focus:outline-none focus:ring-0 active:outline-none ${selectedValue ? '!text-secondary' : '!text-muted-foreground'}`}
                        >
                            <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="new-york">New York</SelectItem>
                            <SelectItem value="london">London</SelectItem>
                            <SelectItem value="tokyo">Tokyo</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="sm:col-span-3">
                    <Button
                        size="xl"
                        className="w-full transition-all duration-300 ease-in-out hover:bg-opacity-90"
                    >
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
}
