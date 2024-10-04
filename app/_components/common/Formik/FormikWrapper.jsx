import { Form } from '@/components/ui/form';

const FormikWrapper = ({ onSubmit, form, children }) => {
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
        </Form>
    );
};

export default FormikWrapper;
