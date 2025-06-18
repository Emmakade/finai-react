import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        agreed: false,
    });

    const [showPassword, setShowPassword] = useState(false); // This code toggles the password icon to shown/not

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const [loading, setLoading] = useState(false);

    // Email validation regex
    const validateEmail = (email) => {
        // Simple RFC 5322 compliant regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.firstname === '' || form.lastname === '' || form.email === '' || form.password === '') {
            alert("Enter your details before you continue.");
            return;
        }
        if (!validateEmail(form.email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!form.agreed) {
            alert("You must agree to the terms to continue.");
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('https://finai-laravel.up.railway.app/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: form.firstname,
                    lastname: form.lastname,
                    email: form.email,
                    password: form.password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                navigate('/Login');
            } else {
                alert(data.message || 'Registration failed.');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='bg-[#1E388A] min-h-screen w-full flex flex-col items-center'>
            {/* Header logo */}
            <div className='w-full max-w-[1440px] flex justify-between items-center gap-8 px-20 py-6'>
                <img src={logo} alt="logo" />
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className='w-[90%] max-w-[700px] mt-16 rounded-[24px] p-10 bg-white shadow-[0px_4px_8px_0px_#00000014] flex flex-col gap-10'>
                {/* Back and Title */}
                <div className='flex justify-between items-start w-full'>
                    <Link className='font-lexend text-[#1e38aa] font-medium text-sm leading-5 underline' to='/'>Back</Link>
                    <h3 className='text-[#191923] font-lexend font-semibold text-xl leading-8 text-center mr-0 lg:mr-[16rem]'>Welcome to FinAI</h3>
                </div>

                {/* Social Signups */}
                <div className='flex flex-col sm:flex-row justify-center items-center gap-5'>
                    <button type="button" className='flex items-center gap-2 border text-black border-[#181818] rounded-[24px] px-5 py-2 w-full sm:w-[205px] text-nowrap'>
                        <FaApple className='bg-[#181818] text-white p-2 rounded-full w-8 h-8' />
                        Continue with Apple
                    </button>
                    <button type="button" className='flex items-center gap-2 bg-[#1E388A] text-white rounded-[24px] border-l-[3px] px-5 py-2 w-full sm:w-[214px] text-nowrap' 
                    onClick={() => window.location.href = 'https://finai-laravel.up.railway.app/api/auth/google'}>
                        <FcGoogle className='bg-white p-2 rounded-full w-8 h-8' />
                        Continue with Google
                    </button>
                </div>

                {/* Divider */}
                <div className='flex items-center gap-4'>
                    <div className='flex-1 border border-[#D5D6E2]'></div>
                    <span className='text-[#393A53] text-lg leading-7 font-lexend'>or</span>
                    <div className='flex-1 border border-[#D5D6E2]'></div>
                </div>

                {/* Name Inputs */}
                <div className='flex flex-col sm:flex-row gap-5'>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="firstname" className='text-[#393A53] text-sm leading-4 font-lexend'>First Name</label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            value={form.firstname}
                            onChange={handleChange}
                            className='rounded border border-[#8488AC] p-3 w-full'
                            placeholder='Input Name Here'
                        />
                    </div>

                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="lastname" className='text-[#393A53] text-sm leading-4 font-lexend'>Last Name</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={form.lastname}
                            onChange={handleChange}
                            className='rounded border border-[#8488AC] p-3 w-full'
                            placeholder='Input Name Here'
                        />
                    </div>
                </div>

                {/* Email Input */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='text-[#393A53] text-sm leading-4 font-lexend'>Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className='rounded border border-[#8488AC] p-3 w-full'
                        placeholder='Input Email Here'
                    />
                </div>

                {/* Password Input with Toggle */}
                <div className='flex flex-col gap-2 relative'>
                    <label htmlFor="password" className='text-[#393A53] text-sm leading-4 font-lexend'>Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className='rounded border border-[#8488AC] p-3 w-full pr-12'
                        placeholder='Password (minimum of 8 characters)'
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-4 top-[42px] cursor-pointer text-[#8488AC]'
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                {/* Terms Checkbox */}
                <div className='flex items-center gap-3'>
                    <input
                        type="checkbox"
                        name="agreed"
                        id="checkbox"
                        checked={form.agreed}
                        onChange={handleChange}
                    />
                    <p className='text-[#393A53] text-base leading-6 font-lexend'>
                        Yes, I understand and agree to the
                        <span className='text-[#1e38aa] underline cursor-pointer ml-1'>AIFin’s Terms of Service and Privacy Policy</span>
                    </p>
                </div>

                {/* Submit Button */}
                <button type="submit" className='bg-[#1E388A] text-white rounded-[24px] px-9 py-3 w-full sm:w-[125px] h-[48px] font-lexend text-sm flex justify-center items-center mx-auto cursor-pointer'>Continue</button>

                {/* Login Redirect */}
                <p className='text-[#393A53] text-center font-lexend'>Already have an account? <Link to='/login' className='text-[#1e38aa] underline'>Login</Link></p>
            </form>
        </div>
    );
};

export default Signup;
