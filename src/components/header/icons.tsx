import { AcademiaIcon } from '../icons/AcademiaIcon';
import { CodeIcon } from '../icons/CodeIcon';
import { LetterIcon } from '../icons/LetterIcon';
import { UserIcon } from '../icons/UserIcon';

export type IconName = 'user' | 'academia' | 'code' | 'letter';

export const ICONS = {
    user: UserIcon,
    academia: AcademiaIcon,
    code: CodeIcon,
    letter: LetterIcon,
} satisfies Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>>;
