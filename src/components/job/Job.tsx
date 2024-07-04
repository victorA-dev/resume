export interface JobProps {
    title: string;
    location: { name: string; url?: string };
    description: string;
    date: { from: Date; to: Date | 'ongoing' };
    tasks?: string[];
    subjects: string[];
}

export const Job = ({
    title,
    date,
    location,
    description,
    tasks,
    subjects,
}: JobProps) => (
    <div className="flex flex-col gap-2 rounded-lg border-[1px] p-2">
        <div className="flex flex-col justify-between gap-2 border-b-[1px] pb-2 sm:flex-row">
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold">{title}</h2>
                <Location {...location} />
            </div>
            <JobDates date={date} />
        </div>
        <p className="whitespace-pre-line text-sm leading-loose">
            {description}
        </p>
        {tasks !== undefined && <Tasks tasks={tasks} />}
        <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
                <span
                    key={subject}
                    className="rounded-full bg-neutral-200 px-2 py-1 text-xs"
                >
                    {subject}
                </span>
            ))}
        </div>
    </div>
);

const JobDates = ({ date }: Pick<JobProps, 'date'>) => {
    const { from, to } = date;

    return (
        <p className="shrink-0 text-sm font-light">
            {from.getFullYear()} -{' '}
            {to === 'ongoing' ? 'Now ' : to.getFullYear()}
        </p>
    );
};

const Location = ({ name, url }: { name: string; url?: string }) => (
    <p className="text-sm font-semibold">
        {url !== undefined ? (
            <a
                href={url}
                target="_blank"
                className="text-blue-800 hover:text-neutral-500"
            >
                @{name}
            </a>
        ) : (
            name
        )}
    </p>
);

const Tasks = ({ tasks }: Required<Pick<JobProps, 'tasks'>>) => (
    <ul className="list-inside list-disc">
        {tasks.map((task) => (
            <li key={task} className="text-sm leading-loose">
                {task}
            </li>
        ))}
    </ul>
);
