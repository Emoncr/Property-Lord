import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const FormikAction = ({
    isDirty = true,
    isSubmitting,
    isValid = true,
    fullwidth = false,
    children,
    ...props
}) => {
    return (
        <Button
            className={cn(fullwidth && 'w-full')}
            type="submit"
            disabled={!isDirty || isSubmitting || !isValid}
            {...props}
        >
            {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                children
            )}
        </Button>
    );
};

export default FormikAction;
