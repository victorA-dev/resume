export const Content = ({ children }: { children: React.ReactNode }) => (
    <main className="min-h-screen bg-neutral-50 peer-has-[:checked]:h-screen peer-has-[:checked]:overflow-hidden">
        <div className="mx-auto max-w-2xl px-4 pb-12 pt-28 sm:px-6 sm:pt-36">
            {children}
        </div>
    </main>
);
