import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted />
			<Container>
				<MainHeading>Seus dados estão seguros conosco</MainHeading>
				<HeroText>
				Fornecemos os melhores sistemas de segurança para clientes em todo o mundo
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Iniciar</Button>
					</Link>
					<HeroButton>Mais Info</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
