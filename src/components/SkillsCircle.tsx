import OrbitingCircles from "./ui/orbiting-circles";
import { adonis, nest, react, vue } from "@/assets/logos";

export function SkillsCircle() {
	return (
		<div className="relative flex h-[300px] sm:h-[400px] lg:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
			<span className="pointer-events-none text-zinc-400 bg-clip-text text-center text-4xl sm:text-6xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
				Habilidades
			</span>

			{/* Inner Circles */}
			<OrbitingCircles
				className="size-[20px] sm:size-[30px] border-none bg-transparent"
				duration={20}
				delay={20}
				radius={60}
			>
				<img src={adonis} alt="AdonisJS" />
			</OrbitingCircles>
			<OrbitingCircles
				className="size-[20px] sm:size-[30px] border-none bg-transparent"
				duration={20}
				delay={10}
				radius={60}
			>
				<img src={react} alt="React" />
			</OrbitingCircles>

			{/* Outer Circles (reverse) */}
			<OrbitingCircles
				className="size-[30px] sm:size-[40px] lg:size-[50px] border-none bg-transparent"
				radius={120}
				duration={20}
				reverse
			>
				<img src={vue} alt="Vue.js" />
			</OrbitingCircles>
			<OrbitingCircles
				className="size-[30px] sm:size-[40px] lg:size-[50px] border-none bg-transparent"
				radius={120}
				duration={20}
				delay={20}
				reverse
			>
				<img src={nest} alt="NestJS" />
			</OrbitingCircles>
		</div>
	);
}
