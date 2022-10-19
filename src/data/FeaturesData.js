import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Melhor Segurança',
		description: 'Oferecemos a melhor segurança de dados aos nossos clientes, o que nos diferencia.',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Fácil de usar',
		description: 'Nosso sistema é fácil de usar e integrar.',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Manutenção',
		description: 'Nosso código é escrito nos mais altos padrões, o que o torna altamente sustentável',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: '24/7 Suporte',
		description: 'Nossa equipe está disponível em todos os momentos, caso você precise de nós',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Preço',
		description: 'Oferecemos a melhor relação custo/benefício',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Escalável',
		description:
			'Nossos servidores estão localizados em todo o mundo, melhorando assim a escalabilidade e a velocidade ',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];
