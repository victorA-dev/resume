import { IconName } from './icons';

export const PATHS = {
    about: '/',
    education: '/education',
    work: '/work',
    contact: '/contact',
};

export const URLS = [
    { text: 'About', path: PATHS.about, icon: 'user' },
    { text: 'Education', path: PATHS.education, icon: 'academia' },
    { text: 'Work', path: PATHS.work, icon: 'code' },
    { text: 'Contact', path: PATHS.contact, icon: 'letter' },
] satisfies {
    text: string;
    path: string;
    icon: IconName;
}[];
