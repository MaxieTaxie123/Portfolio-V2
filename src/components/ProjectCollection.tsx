import React from "react";

type ProjectCollectionProps = {
	children: React.ReactNode;
};

export default function ProjectCollection({ children }: ProjectCollectionProps) {
	const items = React.Children.toArray(children);

	return (
		<div className="w-full">
			{items.map((child, idx) => {
				const even = idx % 2 === 0;
				const bg = !even ? "bg-neutral-300" : "bg-neutral-700";
				const shadow = !even ? "inset-shadow-y" : "";
				const text = !even ? "text-black" : "text-white";
				return (
					<section key={idx} className={`py-16 md:py-20 lg:py-24 ${bg} ${shadow} ${text} min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center rounded-xs`}>
						<div className={`max-w-6xl mx-auto px-6 md:px-8 children-inherit-text ${text}`}>
							{child}
						</div>
					</section>
				);
			})}
		</div>
	);
}
