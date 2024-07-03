'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { ICONS, IconName } from './icons';

const isCurrentPage = (pathname: string, href: string) => pathname === href;

export const NavLink = ({
    text,
    icon,
    ...linkProps
}: LinkProps & { text: string; icon: IconName }) => {
    const pathName = usePathname();
    const hasBorder = isCurrentPage(pathName, linkProps.href.toString());
    const Icon = ICONS[icon];

    return (
        <Link
            className={`flex flex-row items-center gap-1 [&>svg>g]:hover:stroke-neutral-500 [&_p]:hover:text-neutral-500`}
            aria-label={`Go to ${text} page`}
            {...linkProps}
        >
            <Icon className="h-6 w-6" />
            <p
                className={`border-b-2 ${hasBorder ? 'border-blue-800' : 'border-transparent'} text-sm`}
            >
                {text}
            </p>
        </Link>
    );
};
