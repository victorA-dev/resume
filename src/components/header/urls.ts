import { IconName } from './icons';

export const URLS = [
    { text: 'About', path: '/', icon: 'user' },
    { text: 'Education', path: '/education', icon: 'academia' },
    { text: 'Work', path: '/work', icon: 'code' },
    { text: 'Contact', path: '/contact', icon: 'letter' },
] satisfies {
    text: string;
    path: string;
    icon: IconName;
}[];
