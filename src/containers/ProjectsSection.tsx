import { CardProject } from "@/components/CardProject";
import { SectionLayout } from "@/layout/SectionLayout";
import { projectsInfos } from "@/utils/projects";

export function ProjectsSection() {
  return (
    <SectionLayout id="projects" className="flex flex-col w-full bg-profile-700 gap-16 px-4 sm:px-8 py-8">
      <article className="flex flex-col gap-5">
        <h1 className="text-2xl sm:text-3xl text-zinc-300 text-center font-bold">
          Principais Projetos
        </h1>
      </article>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsInfos.map((project) => (
          <CardProject
            key={project.title} 
            title={project.title}
            techs={project.techs}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </SectionLayout>
  );
}
