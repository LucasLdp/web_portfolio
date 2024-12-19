import { MiniCard } from "@/components/MiniCard";
import { SectionLayout } from "@/layout/SectionLayout";
import { aboutMeDescription } from "@/utils/about-me-description";

export function AboutMeSection() {
	return (
		<SectionLayout
			id="sobre"
			className="flex flex-col w-full bg-profile-700 gap-16 px-4 sm:px-8"
		>
			<article className="flex flex-col gap-5">
				<h1 className="text-3xl text-zinc-300 text-center font-bold">
					Sobre Mim
				</h1>
				<span className="text-zinc-300 text-xl font-light text-center">
					Tenho interesse em criar soluções práticas e eficientes. Gosto de
					transformar ideias em produtos digitais que funcionem bem e atendam às
					necessidades das pessoas. Estou sempre aprendendo e buscando melhorar
					para entregar resultados de qualidade.
				</span>
			</article>
			<div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
				{aboutMeDescription.map((description) => (
					<MiniCard
						key={description.title}
						icon={description.icon}
						title={description.title}
						description={description.description}
					/>
				))}
			</div>
		</SectionLayout>
	);
}
