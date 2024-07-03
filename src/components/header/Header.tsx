'use client';

import Link from 'next/link';
import { useState } from 'react';
import colors from 'tailwindcss/colors';
import { Logo } from '../icons/Logo';
import { NavLink } from './NavLink';
import { PATHS, URLS } from './urls';

export const Header = () => (
    <header className="peer">
        <MobileHeader />
        <DesktopHeader />
    </header>
);

const MobileHeader = () => {
    const [open, setOpen] = useState(false);

    const handleChange = () => {
        setOpen(!open);
    };

    return (
        <div className="fixed z-10 flex h-14 w-full items-center justify-between border-b-[1px] border-b-neutral-200 bg-neutral-50 p-4 sm:hidden">
            <label className="peer z-30 flex h-6 w-6 cursor-pointer flex-col justify-around">
                <input
                    className="peer hidden"
                    type="checkbox"
                    checked={open}
                    onChange={handleChange}
                    id="nav-checkbox"
                />
                <div className="relative h-0.5 bg-neutral-900 transition duration-200 ease-out peer-checked:top-[0.35rem] peer-checked:-rotate-45"></div>
                <div className="h-0.5 bg-neutral-900 transition duration-200 ease-out peer-checked:hidden"></div>
                <div className="relative h-0.5 bg-neutral-900 transition duration-200 ease-out peer-checked:bottom-[0.35rem] peer-checked:rotate-45"></div>
            </label>
            <div
                className="fixed inset-0 z-10 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-has-[:checked]:block"
                onClick={handleChange}
            ></div>
            <div className="fixed left-0 top-0 z-20 h-full w-[50%] -translate-x-full overflow-y-auto overscroll-y-none transition duration-300 ease-out peer-has-[:checked]:translate-x-0">
                <div className="h-full w-full bg-white px-4 py-16">
                    <nav className="flex flex-col gap-4">
                        {URLS.map(({ text, path, icon }) => (
                            <NavLink
                                key={path}
                                href={path}
                                text={text}
                                icon={icon}
                                onClick={handleChange}
                            />
                        ))}
                    </nav>
                </div>
            </div>
            <Link href={PATHS.about} aria-label="Go to home page">
                <Logo
                    id="logo-mobile"
                    height={42}
                    width={42}
                    color={colors.blue[800]}
                />
            </Link>
        </div>
    );
};

const DesktopHeader = () => (
    <div className="fixed z-10 hidden w-full border-b-[1px] border-b-neutral-200  bg-neutral-50 sm:block">
        <div className="mx-auto flex h-16 max-w-2xl items-center gap-10 px-6">
            <Link href={PATHS.about} aria-label="Go to home page">
                <Logo
                    id="logo-desktop"
                    height={48}
                    width={48}
                    color={colors.blue[800]}
                />
            </Link>
            <nav className="flex gap-8">
                {URLS.map(({ text, path, icon }) => (
                    <NavLink key={path} href={path} text={text} icon={icon} />
                ))}
            </nav>
        </div>
    </div>
);
