import TypewriterComponent from "typewriter-effect";
import { SectionLayout } from "../layout/SectionLayout";
import myAvatar from "@/assets/myAvatar.jpeg";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

export function MainSection() {
	return (
		<AnimatedGridPattern
			sectionId="home"
			className="flex w-full h-full items-center"
		>
			<SectionLayout className="px-4 sm:px-8">
				<div className="flex w-full h-full">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-items-center lg:justify-items-start relative z-10">
						<article className="flex flex-col items-center text-zinc-300 lg:items-start">
							<div className="flex flex-col items-center lg:items-start">
								<div className="w-full h-auto max-sm:w-auto">
									<TypewriterComponent
										options={{
											strings: ["Lucas Gomes </>"],
											autoStart: true,
											loop: true,
											wrapperClassName: "text-4xl sm:text-6xl font-bold",
											cursorClassName: "text-4xl sm:text-6xl font-bold",
										}}
									/>
								</div>
								<div className="flex flex-col gap-2 mt-5 text-center lg:text-left">
									<span className="font-code text-2xl sm:text-3xl">
										Desenvolvedor Fullstack
									</span>
									<p className="text-lg sm:text-2xl">
										Construindo aplicações com foco em eficiência, inovação e
										simplicidade.
									</p>
									<div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 justify-center lg:justify-start">
										<a
											type="button"
											href="https://www.linkedin.com/in/lucas-paulo-1772b729a/"
											target="_blank"
											className="bg-profile-700 p-3 rounded-md text-sm sm:text-base transform transition-all duration-300 hover:scale-105 hover:bg-profile-600"
										>
											Me acompanhe
										</a>

										<a
											href="#projects"
											className="border-[2px] border-zinc-600 p-3 rounded-md text-sm sm:text-base transform transition-all duration-300 hover:scale-105 hover:border-zinc-400"
										>
											Veja meus projetos
										</a>
									</div>
								</div>
							</div>
						</article>
						<article className="flex justify-center md:ml-24">
							<div className="flex items-center justify-center w-60 h-60 sm:w-80 sm:h-80 lg:w-[25rem] lg:h-[25rem] border-[2px] border-zinc-300 rounded-full overflow-hidden">
								<img src={myAvatar} className="w-full h-full object-cover" />
							</div>
						</article>
					</div>
				</div>
			</SectionLayout>
		</AnimatedGridPattern>
	);
}
