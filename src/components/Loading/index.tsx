interface LoadingProps {
    type: "screen" | "content";
}

export function Loading({ type }: LoadingProps) {
    switch (type) {
        case "screen":
            return (
                <section className="serena-section flex items-center justify-center h-[90vh] bg-transparent">
                    <span className="loading loading-ring loading-lg"></span>
                </section>
            );

        case "content":
            return <span className="loading loading-ring loading-lg"></span>;
    }
}
