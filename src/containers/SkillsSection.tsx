import { SkillsCircle } from "@/components/SkillsCircle";
import { TechPin } from "@/components/TechPin";
import { SectionLayout } from "@/layout/SectionLayout";
import { skillTech } from "@/utils/skill-tech";

export function SkillsSection() {
	return (
		<SectionLayout id="skills" className="bg-profile-600 px-4 sm:px-8 py-8">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
				<SkillsCircle />
				<div className="flex flex-wrap justify-center lg:justify-start gap-4">
					{skillTech.map((tech, index) => (
						<TechPin key={index} text={tech} />
					))}
				</div>
			</div>
		</SectionLayout>
	);
}
