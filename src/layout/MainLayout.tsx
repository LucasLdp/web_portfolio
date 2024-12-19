type Props = {
	children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
	return (
		<main className="w-screen h-screen bg-profile-500 overflow-x-hidden scroll-smooth">
			{children}
		</main>
	);
}
