'use client';

import NavLink from './NavLink';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { href: '/drafts', label: 'Drafts' },
  { href: '/tournaments', label: 'Tournaments' },
  { href: '/cost-systems', label: 'Cost systems' },
  { href: '/users', label: 'Users' },
  { href: '/all-stats', label: 'All Stats' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const [language, setLanguage] = useState('EN');

  return (
    <header className="w-full bg-[#1F232F] border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="FightClub Logo"
            width={167}
            height={28}
            priority
          />
        </Link>

        <div className="flex justify-center flex-1">
          <nav className="flex gap-2 bg-[#111219] px-4 rounded-full max-w-[830px] w-full justify-between h-[36px] items-center">
            {navLinks.map(({ href, label }) => (
              <NavLink key={href} href={href}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="font-montserrat w-[120px] h-[36px] rounded-full bg-[#111219] flex items-center justify-center gap-2 text-white text-[14px] leading-[1.45] font-bold italic"
            onClick={() => setLanguage(language === 'EN' ? 'RU' : 'EN')}
          >
            <img
              src="/globe.svg"
              alt="Globe"
              width={16}
              height={17}
            />
            {language === 'EN' ? 'English' : 'Russian'}
          </button>

          <Link href="/profile">
            <div className="w-[35px] h-[36px] rounded-full overflow-hidden cursor-pointer">
              <img
                src="/noAvatar.png"
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
