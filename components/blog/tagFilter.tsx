import cn from "classnames";

export function TagsFilter({
    tags,
    selected,
    onClick }: {
        tags: Array<string>,
        selected: Set<string>,
        onClick: Function
    }) {
    return (
        <div className="w-full border-b border-gray-400 authors border-opacity-20">
            <div
                className={cn(
                    "flex flex-wrap justify-center py-8 mx-auto gap-7",
                    tags.length > 4 && "max-w-3xl"
                )}
            >
                {
                    tags.map((tag) => {

                        var classes = "inline-flex justify-center cta-container"
                        if (selected.has(tag)) {
                            classes = "cta-container-selected "
                        }

                        return <div className={classes}>
                            <button className={cn("cta")} onClick={() => { onClick(tag) }}>
                                {tag}
                            </button>
                        </div>
                    })
                }
            </div>
        </div>
    );
}
