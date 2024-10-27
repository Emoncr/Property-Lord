import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
const Login = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="flex w-full max-w-6xl overflow-hidden rounded-lg shadow-2xl">
                <div className="w-1/2 bg-white p-12">
                    <h1 className="mb-8 text-4xl font-bold text-gray-800">
                        Get Started Now
                    </h1>
                    <h2 className="mb-6 text-2xl font-semibold text-primary">
                        Welcome to Property Lords
                    </h2>
                    <p className="mb-8 text-gray-600">
                        Find your dream property or list your own with ease.
                    </p>
                    <form className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <Input
                                id="name"
                                placeholder="Enter your name"
                                className="mt-1"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="mt-1"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="mt-1"
                            />
                        </div>
                        <div className="flex items-center">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="ml-2 text-sm text-gray-600"
                            >
                                I agree to the terms & policy
                            </label>
                        </div>
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                            Sign up
                        </Button>
                    </form>
                    <div className="mt-6 text-center text-sm text-gray-500">
                        <span>Or</span>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        <Button variant="outline" className="w-full">
                            <img
                                src="/google-icon.svg"
                                alt="Google"
                                className="mr-2 h-5 w-5"
                            />
                            Sign in with Google
                        </Button>
                        <Button variant="outline" className="w-full">
                            <img
                                src="/apple-icon.svg"
                                alt="Apple"
                                className="mr-2 h-5 w-5"
                            />
                            Sign in with Apple
                        </Button>
                    </div>
                    <p className="mt-8 text-center text-sm text-gray-500">
                        Have an account?{' '}
                        <a
                            href="#"
                            className="font-semibold text-green-600 hover:text-green-500"
                        >
                            Sign In
                        </a>
                    </p>
                </div>
                <div
                    className="w-1/2 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Login;
