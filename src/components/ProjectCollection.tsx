import React from "react";

type ProjectCollectionProps = {
	children: React.ReactNode;
};

export default function ProjectCollection({ children }: ProjectCollectionProps) {
	const items = React.Children.toArray(children);

	return (
		<div className="w-full text-justify p-2">
			{items.map((child, idx) => {
				// Use 1-based index for human-friendly even (2nd, 4th, ...)
				const isEven = (idx + 1) % 2 === 0;
				const bg = !isEven ? "bg-neutral-700" : "bg-neutral-300";
				const shadow = isEven ? "inset-shadow-y" : "";
				const text = !isEven ? "text-white" : "text-black";
				const sectionContent = React.isValidElement<{ className?: string }>(child)
					? React.cloneElement(child, {
						className: [
							child.props.className,
							"grid gap-6 md:grid-cols-2 md:items-stretch",
							isEven
								? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
								: "md:[&>*:first-child]:order-1 md:[&>*:last-child]:order-2",
						]
							.filter(Boolean)
							.join(" "),
					  })
					: child;
				// Inner container should occupy 50% of the section width
				return (
					<section
						key={idx}
						className={`py-16 md:py-20 lg:py-24 ${bg} ${shadow} ${text} min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center rounded-xs`}
					>
						<div
							className={`w-full max-w-6xl px-6 md:px-8 children-inherit-text ${text}`}
						>
							{sectionContent}
						</div>
					</section>
				);
			})}
		</div>
	);
}
