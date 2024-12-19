import React from "react";
import {  Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	link?: string;
}

const InteractiveHoverButton = React.forwardRef<
	HTMLButtonElement,
	InteractiveHoverButtonProps
>(({ text = "Github", link = "#", className, ...props }, ref) => {
	return (
		<button
			ref={ref}
			className={cn(
				"group relative w-32 cursor-pointer overflow-hidden rounded-full border p-2 text-center font-semibold border-zinc-800 bg-zinc-950",
				className,
			)}
			{...props}
		>
			<a href={link}>
				<span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
					{text}
				</span>
				<div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 text-zinc-900">
					<span>{text}</span>
					<Github />
				</div>
				<div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg  transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] bg-zinc-50 group-hover:bg-zinc-50"></div>
			</a>
		</button>
	);
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;
