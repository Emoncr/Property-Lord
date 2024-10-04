import { Checkbox } from '@/components/ui/checkbox';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form';

const CheckBoxField = ({ name, form, description }) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex items-start justify-start gap-2">
                    <FormControl>
                        <Checkbox
                            ref={field.ref}
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="flex focus:outline-none focus:ring-1 focus:ring-ring"
                        />
                    </FormControl>
                    {description && (
                        <FormLabel className="!mt-0">{description}</FormLabel>
                    )}
                </FormItem>
            )}
        />
    );
};

export default CheckBoxField;
