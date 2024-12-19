import { useEffect, useState } from "react";

export function Header() {
	const [activeSection, setActiveSection] = useState<string | null>(null);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Atualiza o estado para adicionar um efeito ao rolar
			setIsScrolled(window.scrollY > 0);

			const sections = ["home", "sobre", "skills", "Projetos"];
			const currentSection = sections.find((section) => {
				const element = document.getElementById(section);
				if (!element) return false;
				const rect = element.getBoundingClientRect();
				return (
					rect.top <= window.innerHeight / 2 &&
					rect.bottom >= window.innerHeight / 2
				);
			});

			setActiveSection(currentSection || null);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`p-5 bg-profile-600 border-b border-zinc-600 z-50 fixed top-0 w-full transition-transform duration-300 ${
				isScrolled ? "shadow-md" : ""
			}`}
		>
			<nav className="flex justify-end">
				<div className="flex gap-5 text-zinc-200 text-sm">
					{["home", "sobre", "skills", "projetos"].map((section) => (
						<a
							key={section}
							href={`#${section}`}
							className={`transition-colors duration-300 ${
								activeSection === section
									? "text-yellow-400 font-bold"
									: "hover:text-yellow-400"
							}`}
						>
							{section.charAt(0).toUpperCase() + section.slice(1)}
						</a>
					))}
				</div>
			</nav>
		</header>
	);
}
