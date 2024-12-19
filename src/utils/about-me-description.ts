import {
	Code,
	Github,
	Users,
	Book,
	Lightbulb,
	Zap,
	LucideProps,
} from "lucide-react";

type AboutMeDescription = {
	title: string;
	description: string;
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
};

export const aboutMeDescription: AboutMeDescription[] = [
	{
		title: "Desenvolvimento",
		description:
			"Busco constantemente criar soluções de código claras e eficientes, focando na escalabilidade e boas práticas para garantir projetos bem estruturados e sustentáveis.",
		icon: Code,
	},
	{
		title: "Evolução",
		description:
			"Constante evolução por meio da adaptação a novas tecnologias, aprimoramento de habilidades e busca por soluções mais eficientes e de melhor qualidade a cada projeto.",
		icon: Zap,
	},
	{
		title: "Aprendizado Contínuo",
		description:
			"Busco sempre me atualizar com as últimas tendências e tecnologias, garantindo que o trabalho seja feito com as melhores práticas e ferramentas disponíveis.",
		icon: Book,
	},
	{
		title: "Colaboração",
		description:
			"Acredito que o trabalho em equipe é essencial para o sucesso de qualquer projeto. Sempre busco colaborar de forma aberta e construtiva para alcançar os melhores resultados.",
		icon: Users,
	},
	{
		title: "Inovação",
		description:
			"A inovação é um pilar fundamental no meu trabalho. Estou sempre buscando novas formas de solucionar problemas e criar soluções criativas que atendam às necessidades dos usuários.",
		icon: Lightbulb,
	},
	{
		title: "Eficiência",
		description:
			"Foco em criar soluções que não apenas funcionem, mas que sejam rápidas, escaláveis e fáceis de manter, visando sempre a otimização do tempo e recursos.",
		icon: Github,
	},
];
