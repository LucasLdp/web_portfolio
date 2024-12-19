import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { TechPin } from "./TechPin";
import InteractiveHoverButton from "./ui/interactive-hover-button";

interface ICardProjectProps {
	title: string;
	description: string;
	image: string;
	techs: string[];
	link: string;
}

export function CardProject({
	description,
	image,
	title,
	techs,
	link,
}: ICardProjectProps) {
	return (
		<Card className="flex flex-col gap-4 rounded-lg bg-profile-800">
			<CardHeader className="w-full">
				<div className="w-full h-48 sm:h-56 overflow-hidden rounded-md">
					<img
						src={image}
						alt={title}
						className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
					/>
				</div>
			</CardHeader>
			<CardContent className="flex flex-col gap-4 px-4 sm:px-6">
				<p className="text-zinc-300 text-lg sm:text-xl font-bold">{title}</p>
				<p className="text-sm sm:text-base text-zinc-400">{description}</p>
			</CardContent>
			<CardFooter className="flex flex-col gap-4 px-4 sm:px-6 pb-4">
				<div className="flex flex-wrap gap-2">
					{techs.map((item, index) => (
						<TechPin key={index} text={item} />
					))}
				</div>
				<InteractiveHoverButton
					link={link}
					className="self-start bg-zinc-700 text-zinc-200 px-4 py-2 rounded-md hover:bg-zinc-600 transition-colors"
				/>
			</CardFooter>
		</Card>
	);
}
