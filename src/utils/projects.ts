interface IProjectInfo {
	title: string;
	description: string;
	image: string;
	techs: string[];
	link: string;
}

import { adonis, atlasGym, ignite, poupe, sanh } from "@/assets/projects";

export const projectsInfos: IProjectInfo[] = [
	{
		title: "Poupe+",
		description: "Projeto de gerenciamento de despesas pessoais.",
		image: poupe,
		techs: [
			"React",
			"TypeScript",
			"TailwindCSS",
			"Express.js",
			"Docker",
			"Prisma",
		],
		link: "https://github.com/LucasLdp/PoupePlus",
	},
	{
		title: "Atlas Gym",
		description:
			"Sistema de gerenciamento de treinamentos para alunos e instrutores.",
		image: atlasGym,
		techs: [
			"TypeScript",
			"Handlebars",
			"CSS",
			"Express.js",
			"MySQL",
			"HTML",
			"JavaScript",
		],
		link: "https://github.com/LucasLdp/atlas_gym",
	},
	{
		title: "Ignite Feed",
		description:
			"Plataforma de compartilhamento de conteúdo para comunidades online.",
		image: ignite,
		techs: ["React", "TypeScript", "TailwindCSS"],
		link: "https://github.com/LucasLdp/ignite-feed",
	},
	{
		title: "SANH",
		description: "Sistema de acompanhamento nutricional hospitalar",
		image: sanh,
		techs: [
			"Express",
			"Handlebars",
			"CSS",
			"JavaScript",
			"MySQL",
			"HTML",
			"Jquery",
			"Sequelize",
		],
		link: "https://github.com/LucasLdp/sanh",
	},
	{
		title: "API FCamara",
		description: "API para o gerenciamento de dados de uma biblioteca virtual.",
		image: adonis,
		techs: ["AdonisJs", "PostgreSQL", "TypeScript"],
		link: "https://github.com/LucasLdp/library_app",
	},
];
