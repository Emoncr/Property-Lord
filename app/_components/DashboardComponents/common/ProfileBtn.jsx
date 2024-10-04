'use server';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import HandleLogout from '../../common/HandleLogout';
import { decodedToken } from '@/lib/action';
import ProfileButtonTrigger from './ProfileButtonTrigger';

const ProfileBtn = async () => {
    const payload = await decodedToken();

    return (
        <>
            <DropdownMenu>
                <div className="z-50">
                    <ProfileButtonTrigger role={payload?.role} />
                </div>
                {payload?.role === 'user' ? (
                    //==== USER PROFILE ITEMS
                    <DropdownMenuContent align="end">
                        {/* <Link href={"/dashboard/profile"}>
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                            </Link> */}
                        {/* <DropdownMenuSeparator /> */}
                        <HandleLogout />
                    </DropdownMenuContent>
                ) : (
                    //==== VENDOR PROFILE ITEMS
                    <DropdownMenuContent align="end">
                        <Link href={'/vendor/profile'}>
                            <DropdownMenuItem className="font-bold">
                                Profile
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuSeparator />
                        <HandleLogout />
                    </DropdownMenuContent>
                )}
            </DropdownMenu>
        </>
    );
};

export default ProfileBtn;
