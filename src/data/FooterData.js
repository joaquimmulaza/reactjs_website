import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
	},
];

export const footerData = [
	{
		title: 'Principal',
		links: ['Blog', 'FAQs', 'Suporte', 'Sobre nós'],
	},
	{
		title: 'Produto',
		links: ['Iniciar', 'Pessoal', 'Negocios', 'Equipe'],
	},
	{
		title: 'Imprensa',
		links: ['Logos', 'Eventos', 'Histórias', 'Escritório'],
	},
	{
		title: 'Jurídico',
		links: ['GDPR', 'Política de Privacidade', 'Termos de serviço', 'Disclaimer'],
	},
];
