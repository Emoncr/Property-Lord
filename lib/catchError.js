const catchError = (error, toaster, action) => {
    let responseError = error?.info?.errors;
    if (responseError) {
        let findErrorName = Object.keys(responseError);
        findErrorName.forEach((errorName) => {
            toaster({
                variant: 'destructive',
                title: 'Failed',
                description: responseError?.[errorName].message,
            });
        });
    } else {
        if (
            (action === 'signin' || action === 'signup') &&
            (error.statusCode === 401 || error.statusCode === 404)
        ) {
            toaster({
                variant: 'destructive',
                title: 'Failed',
                description: 'Incorrect email or password',
            });
        } else {
            toaster({
                variant: 'destructive',
                title: 'Failed',
                description: error?.message,
            });
        }
    }
};

export default catchError;
