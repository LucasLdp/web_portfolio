import { LucideProps } from "lucide-react";

interface IMiniCardProps {
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
	title: string;
	description: string;
}

export function MiniCard({ icon: Icon, title, description }: IMiniCardProps) {
	return (
		<div className="flex flex-col bg-profile-800 rounded-xl p-4 gap-4 h-auto border border-zinc-600">
			<span className="flex items-center gap-2">
				<Icon className="text-zinc-200" width={32} />
				<span className="text-zinc-200 font-bold">{title}</span>
			</span>
			<div className="flex flex-col gap-2 ml-2">
				<span className="text-zinc-300 text-xl font-light">{description}</span>
			</div>
		</div>
	);
}
