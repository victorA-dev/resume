import { Metadata } from 'next';
import { Job, JobProps } from '../../components/job/Job';

export const metadata: Metadata = {
    title: 'Education',
};

const STUDIES = [
    {
        title: 'M.Sc. Research in Cognitive Science',
        location: { name: 'École Normale Supérieure (ENS Ulm)' },
        date: { from: new Date('2019-01-01'), to: new Date('2021-01-01') },
        subjects: [
            'Computational Modeling',
            'Data Science',
            'Linguistics',
            'Neuroscience',
            'Cognitive Psychology',
        ],
        description:
            'Specialization in Linguitics\nThesis: "Quantifying near-homophony induced by French liaison"',
    },
    {
        title: 'B.Sc. Speech and Language Therapy',
        location: { name: 'University of Rouen Normandy' },
        date: { from: new Date('2016-01-01'), to: new Date('2019-01-01') },
        subjects: [
            'Linguistics',
            'Neuroscience',
            'Neuropsychology',
            'Developmental psychology',
        ],
        description:
            'Foundational coursework on language acquisition and language disorders',
    },
] satisfies JobProps[];

const Page = () => (
    <div className="flex flex-col gap-6">
        <h1 className="page-title">Education</h1>
        <p className="paragraph">
            I&apos;ve always been keen to explore new subjects and motivated to
            acquire new skills. I discovered programming through computational
            modeling during my research master&apos;s degree in cognitive
            science at{' '}
            <a
                href="https://cognition.ens.fr/"
                target="_blank"
                className="font-semibold hover:text-neutral-500"
            >
                ENS
            </a>
            . I haven&apos;t been able to stop coding since!
        </p>
        <div className="flex flex-col gap-4">
            {STUDIES.map((study) => (
                <Job key={study.title} {...study} />
            ))}
        </div>
    </div>
);

export default Page;
