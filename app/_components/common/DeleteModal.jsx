import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import useRequest from '@/hooks/useRequest';
import { Loader, Trash } from 'lucide-react';
import { useState } from 'react';

const defaultDrigger = (
    <Button size="icon" variant="outline" className="rounded-full">
        <Trash className="h-4 w-4" />
    </Button>
);
const DeleteModal = ({
    deleteRequest,
    trigger,
    handleDone,
    title,
    // send cachekey and id for single delete request & update data instantly
    cacheKey,
    id,
    children,
}) => {
    const [open, setOpen] = useState(false);
    const { isLoading, handleRequest } = useRequest();
    async function handleDelete() {
        try {
            await handleRequest({
                id,
                cacheKey,
                isDelete: !!cacheKey, //  thats means if no cacheKey is delete will be false
                // isDelete: true, //  thats means if no cacheKey is delete will be false
                request: deleteRequest,
                handleComplete: async (data) => {
                    await handleDone(data);
                    setOpen(false);
                },
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure to Delete {title}?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>No</AlertDialogCancel>
                    <Button disabled={isLoading} onClick={handleDelete}>
                        {isLoading ? (
                            <Loader className="mr-2 h-7 w-7 animate-spin" />
                        ) : (
                            'Yes'
                        )}
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
export default DeleteModal;
