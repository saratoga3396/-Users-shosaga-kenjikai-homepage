"use client";

import Link from 'next/link';
import { useMemo, useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = useMemo(
    () => [
      { href: '/#news', label: 'お知らせ' },
      { href: '/#philosophy', label: '基本理念' },
      { href: '/#facilities', label: '施設紹介' },
      { href: '/#guide', label: 'ご利用案内' },
      { href: '/#disclosure', label: '情報公開' },
      { href: '/#community', label: '地域公益活動' },
      { href: '/#recruit', label: '求人' },
      { href: '/#access', label: 'アクセス' },
    ],
    []
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-700">
          <Link href="/">社会福祉法人健慈会</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-700 hover:text-blue-600">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-6 py-2 text-gray-700 hover:bg-blue-50"
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
