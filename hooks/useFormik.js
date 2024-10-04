import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const useFormik = (props) => {
    const form = useForm({
        resolver: yupResolver(props.schema || {}),
        defaultValues: props.defaultValues || {},
        ...props,
    });
    return form;
};

export default useFormik;
