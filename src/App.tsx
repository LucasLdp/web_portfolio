import { Header } from "./components/Header";
import { AboutMeSection } from "./containers/AboutMeSection";
import { MainSection } from "./containers/MainSection";
import { ProjectsSection } from "./containers/ProjectsSection";
import { SkillsSection } from "./containers/SkillsSection";
import { MainLayout } from "./layout/MainLayout";

export function App() {
	return (
		<MainLayout>
			<Header />
			<MainSection />
			<AboutMeSection />
			<SkillsSection />
			<ProjectsSection />
		</MainLayout>
	);
}
