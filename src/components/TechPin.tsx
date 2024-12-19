import { cn } from "@/lib/utils";
import AnimatedShinyText from "./ui/animated-shiny-text";

interface ITechPinProps {
	text: string;
}

export function TechPin({ text }: ITechPinProps) {
	return (
		<div
			className={cn(
				"group inline-flex m-2 items-center rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer border-white/5 bg-neutral-900 hover:bg-neutral-800",
			)}
		>
			<AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
				<span>{text}</span>
			</AnimatedShinyText>
		</div>
	);
}
