import { Metadata } from 'next';
import { Job, JobProps } from '../../components/job/Job';

export const metadata: Metadata = {
    title: 'Work',
};

const JOBS = [
    {
        title: 'Full-stack Engineer',
        location: { name: 'Galadrim', url: 'https://galadrim.fr' },
        date: { from: new Date('2022-04-01'), to: 'ongoing' },
        subjects: [
            'Typescript',
            'React.js',
            'Remix',
            'Material-UI',
            'Styled-components',
            'Redux',
            'MobX',
            'Nest.js',
            'GraphQL',
            'MySQL',
            'Prisma',
            'Test Driven Development',
        ],
        description: 'Developing web applications using Agile methodology',
        tasks: [
            'Implement features through efficient and maintainable code',
            'Work on a SaaS platform for temporary work management used by major French companies such as BNP Paribas, Eiffage and Auchan',
            'Mentoring junior engineers',
        ],
    },
    {
        title: 'Research Assistant',
        location: {
            name: 'LSCP Laboratoire de Sciences Cognitives et Psycholinguistique (ENS)',
            url: 'https://lscp.dec.ens.fr',
        },
        date: { from: new Date('2019-09-01'), to: new Date('2021-06-01') },
        description:
            'Worked on projects related to phonology and language acquisition',
        tasks: [
            'Conducted literature reviews, designed experiments and wrote scientific reports',
            'Extracted and analyzed data from linguistic corpora',
        ],
        subjects: [
            'Cognitive modeling',
            'Computational linguistics',
            'Experimental design',
            'Statistics',
            'Data analysis',
            'Python',
            'Pandas',
            'Matplotlib',
            'R',
        ],
    },
] satisfies JobProps[];

const Page = () => (
    <div className="flex flex-col gap-6">
        <h1 className="page-title">Work</h1>
        <p className="paragraph">
            I&apos;ve been working as a full-stack engineer since early 2022,
            building high-performance, scalable web applications. I&apos;ve had
            the chance to work on a wide range of applications among teams of
            engineers, researchers and designers. I&apos;m now involved in
            mentoring junior engineers.
        </p>
        <div className="flex flex-col gap-4">
            {JOBS.map((study) => (
                <Job key={study.title} {...study} />
            ))}
        </div>
    </div>
);

export default Page;
