export const data = [
	{
		title: 'O que nossos clientes dizem',
		description:
			'Nossos clientes ficam felizes com nossos serviços por mais vários anos. Veja avaliações reais de nossos clientes.',
		image: './assets/clients.jpg',
	},
	{
		title: 'Nossa segurança',
		description: 'Saiba mais sobre nossos sistemas de segurança para garantir que seus dados estejam sempre seguros',
		image: './assets/security.jpg',
	},
	{
		title: 'Nossa Equipe',
		description: 'Nossa equipe é composta pelos melhores especialistas do setor, conheça-os',
		image: './assets/teamwork.jpg',
	},
	{
		title: 'Nossos serviços',
		description: 'Saiba mais sobre hardware e software usados ​​para seu serviço',
		image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg',
	},
	{
		title: 'Nossos clientes',
		description: 'Fornecemos serviços para os principais clientes da indústria de tecnologia',
		image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
