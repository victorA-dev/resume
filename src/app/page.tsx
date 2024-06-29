import ExportedImage from 'next-image-export-optimizer';
import imgSrc from '../../public/images/frenchCountryside.jpg';

const Page = () => (
    <>
        <h1 className="mb-8 text-center text-4xl font-bold tracking-wide text-blue-800 sm:text-6xl">
            Victor Antoine
        </h1>
        <div className="mb-3 flex items-center justify-center gap-3">
            <span className="block h-2 w-2 rounded-full bg-lime-600 blur-[1px]"></span>
            <p className=" text-center text-xs font-extralight sm:text-sm">
                Excited to work on amazing projects
            </p>
        </div>
        <p className="paragraph mx-auto mb-10 max-w-72 text-center sm:mb-14 sm:max-w-96">
            I&apos;m a full-stack engineer living in the French countryside.
            Passionate about building products that make a difference, I&apos;m
            currently working at{' '}
            <a
                href="https://galadrim.fr/"
                target="_blank"
                className="font-semibold hover:text-neutral-500"
            >
                Galadrim
            </a>
            .
        </p>
        <ExportedImage
            alt="french countryside"
            src={imgSrc}
            className="rounded-lg"
            placeholder="blur"
            priority
        />
    </>
);

export default Page;
