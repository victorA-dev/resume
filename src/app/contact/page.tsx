import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact',
};

const EMAIL = 'victor.antoine.dev@gmail.com';

const Page = () => (
    <div className="flex flex-col gap-10 sm:gap-16">
        <h1 className="page-title text-center">Get in touch</h1>
        <p className="paragraph text-center">
            Open to all ideas. Whether you have a question, a fantastic project,
            or just want to meet me, let&apos;s talk!
        </p>
        <a
            href={`mailto:${EMAIL}`}
            className="mx-auto block w-fit rounded-lg border-[1px] p-5 transition duration-300 hover:bg-neutral-200"
        >
            Say Hello!
        </a>
    </div>
);

export default Page;
