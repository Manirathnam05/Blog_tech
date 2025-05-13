'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Dropdown } from 'antd';
import { DownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';

const Navbar = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // NEW

  useEffect(() => {
    const registered = localStorage.getItem('registered');
    if (registered === 'true') {
      setIsRegistered(true);
    }
  }, []);

  const handleRegister = () => {
    alert("Registered Successfully");
    localStorage.setItem('registered', 'true');
    setIsRegistered(true);
    setShowForm(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('registered');
    setIsRegistered(false);
  };

  const pricingMenuItems = [
    {
      key: '1',
      label: <Link href="/pricing/plans">Plans & Pricing</Link>,
    },
    {
      key: '2',
      label: <Link href="/pricing/comparison">Free vs Premium</Link>,
    },
    {
      key: '3',
      label: <Link href="/pricing/enterprise">Enterprise Solutions</Link>,
    },
    {
      key: '4',
      label: <Link href="/pricing/Faqs">Billing FAQs</Link>,
    },
  ];

  const menuItems = [
    {
      key: '1',
      label: <Link href="/pages/Resources/Cheat">Cheat</Link>,
    },
    {
      key: '2',
      label: <Link href="/pages/Resources/Tools">Tools</Link>,
    },
    {
      key: '3',
      label: <Link href="/pages/Resources/Tutorials">Tutorials</Link>,
    },
  ];

  return (
    <div className="bg-black text-white relative z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <h1 className="font-bold text-2xl">Blog</h1>
        </Link>

       
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl md:hidden"
        >
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>

        <ul className="hidden md:flex gap-6  text-lg capitalize">
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          <li><Link href="/Resource" className="hover:underline">Resources</Link></li>

          <li>
            <Dropdown menu={{ items: menuItems }} trigger={['click']}>
              <button className="flex items-center gap-2 cursor-pointer bg-transparent text-white">
                More <DownOutlined />
              </button>
            </Dropdown>
          </li>

          <li>
            <Dropdown menu={{ items: pricingMenuItems }} trigger={['click']}>
              <button className="flex items-center gap-2 cursor-pointer bg-transparent text-white">
                Pricing <DownOutlined />
              </button>
            </Dropdown>
          </li>
        </ul>

  
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <h2 className="text-lg cursor-pointer">{isRegistered ? "Log out" : "Log in"}</h2>
          </Link>

          {!isRegistered ? (
            <button
              className="bg-white text-black font-bold px-4 py-2 rounded-full"
              onClick={() => setShowForm((prev) => !prev)}
            >
              Sign Up
            </button>
          ) : (
            <button
              className="bg-white text-black font-bold px-4 py-2 rounded-full"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-start gap-4 px-6 pb-4 bg-black text-white text-lg">
          <li><Link href="/about" className='hover:underline'>About</Link></li>
          <li><Link href="/contact"  className='hover:underline'>Contact</Link></li>
          <li><Link href="/Resource" className='hover:underline'>Resources</Link></li>
          <li><Link href="/pages/Resources/Cheat" className='hover:underline'>Cheat</Link></li>
          <li><Link href="/pages/Resources/Tools" className='hover:underline'>Tools</Link></li>
          <li><Link href="/pages/Resources/Tutorials" className='hover:underline'>Tutorials</Link></li>
          <li><Link href="/pricing/plans" className='hover:underline'>Plans & Pricing</Link></li>
          <li><Link href="/pricing/comparison" className='hover:underline'>Free vs Premium</Link></li>
          <li><Link href="/pricing/enterprise" className='hover:underline'>Enterprise Solutions</Link></li>
          <li><Link href="/pricing/Faqs" className='hover:underline'>Billing FAQs</Link></li>
          <li>
            {!isRegistered ? (
              <button
                className="bg-white text-black font-bold px-4 py-2 rounded-full"
                onClick={() => setShowForm((prev) => !prev)}
              >
                Sign Up
              </button>
            ) : (
              <button
                className="bg-white text-black font-bold px-4 py-2 rounded-full"
                onClick={handleLogout}
              >
                Sign Out
              </button>
            )}
          </li>
        </ul>
      )}

      {/* Registration Form */}
      {showForm && (
        <div className="absolute top-20 right-4 bg-white text-black p-4 w-64 rounded-lg shadow-lg z-20">
          <h3 className="text-xl font-semibold mb-3">Register Now</h3>
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full mb-2 px-3 py-2 border border-gray-500 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full mb-2 px-3 py-2 border border-gray-500 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="off"
            required
            className="w-full mb-3 px-3 py-2 border border-gray-500 rounded"
          />
          <button
            onClick={handleRegister}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
