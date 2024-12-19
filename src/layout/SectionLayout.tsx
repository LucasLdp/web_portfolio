type Props = {
	children: React.ReactNode;
	className?: string;
	id?: string;
};

export function SectionLayout({ children, className, id }: Props) {
	return (
		<section id={id} className={`w-full h-auto p-24 ${className}`}>
			{children}
		</section>
	);
}
