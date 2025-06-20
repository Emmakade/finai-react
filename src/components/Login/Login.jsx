import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import '../loader.css';

const Login = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.email === '' || form.password === '') {
            alert("Enter your details before you continue.");
            return;
        }
        if (!validateEmail(form.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('https://finai-laravel.up.railway.app/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: form.email,
                    password: form.password,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                console.log('Login response:', data);
                navigate('/dashboard');
            } else {
                alert(data.message || "Login failed. Please check your credentials.");
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        }  finally {
            setLoading(false);
        }
    };

    return (
        <div className='bg-[#1E388A] min-h-screen w-full flex flex-col items-center px-2'>
            {/* Header logo */}
            <div className='w-full max-w-[1200px] flex justify-between items-center gap-8 px-4 sm:px-10 md:px-20 py-6'>
                <img src={logo} alt="logo" className="w-28 md:w-36" />
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className='w-full max-w-[600px] mt-10 md:mt-6 rounded-[24px] p-6 md:p-10 bg-white shadow-md flex flex-col gap-8 md:gap-4'>
                {/* Back and Title */}
                <div className='flex justify-between items-start w-full'>
                    <Link className='font-lexend text-[#1e38aa] font-medium text-sm underline' to='/'>Back</Link>
                    <h3 className='text-[#191923] font-lexend font-semibold text-lg sm:text-xl leading-7 sm:leading-8 text-center ml-auto  md:mr-24 mr-0 lg:mr-[16rem]'>Welcome back!</h3>
                </div>

                {/* Social Signups */}
                <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5'>
                    <button type="button" className='flex items-center justify-center gap-2 border text-black border-[#181818] rounded-[24px] px-4 py-2 w-full sm:w-[205px] text-sm'>
                        <FaApple className='bg-[#181818] text-white p-2 rounded-full w-8 h-8' />
                        Continue with Apple
                    </button>
                    <button type="button" className='flex items-center justify-center gap-2 bg-[#1E388A] text-white rounded-[24px] border-l-[3px] px-4 py-2 w-full sm:w-[214px] text-sm' 
                    onClick={() => window.location.href = 'https://finai-laravel.up.railway.app/api/auth/google'}>
                        <FcGoogle className='bg-white p-2 rounded-full w-8 h-8' />
                        Continue with Google
                    </button>
                </div>

                {/* Divider */}
                <div className='flex items-center gap-4'>
                    <div className='flex-1 border border-[#D5D6E2]'></div>
                    <span className='text-[#393A53] text-sm sm:text-lg font-lexend'>or</span>
                    <div className='flex-1 border border-[#D5D6E2]'></div>
                </div>

                {/* Email Input */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='text-[#393A53] text-sm font-lexend'>Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className='rounded border border-[#8488AC] p-3 w-full text-sm'
                        placeholder='Input Email Here'
                    />
                </div>

                {/* Password Input with Toggle */}
                <div className='flex flex-col gap-2 relative'>
                    <label htmlFor="password" className='text-[#393A53] text-sm font-lexend'>Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className='rounded border border-[#8488AC] p-3 w-full pr-12 text-sm'
                        placeholder='Password (minimum of 6 characters)'
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-4 top-[42px] cursor-pointer text-[#8488AC]'
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                {/* Forgot Password */}
                <div className='flex justify-end'>
                    <a href='#' className='font-lexend text-sm text-[#1e388a] underline'>Forgot password?</a>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className='bg-[#1E388A] text-white rounded-[24px] px-9 py-3 w-full sm:w-[125px] h-[48px] font-lexend text-sm flex justify-center items-center mx-auto cursor-pointer' 
                     disabled={loading}
                >
                    {loading && <span className="loader"></span>}
                    {loading ? "Processing..." : "Continue"}
                </button>

                {/* Login Redirect */}
                <p className='text-[#393A53] text-center font-lexend text-sm'>
                    Don’t have an account? <Link to='/signup' className='text-[#1e388a] underline'>Sign up</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
