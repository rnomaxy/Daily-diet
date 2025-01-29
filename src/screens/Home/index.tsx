import { Image } from "react-native";

import { Container, Header, MealsText } from './styles';

import logoImg from "@assets/Logo.png";
import profileImg from "@assets/Ellipse.png"
import { StatisticsCard } from "@components/StatisticsCard";

export function Home() {
    return (
        <Container>
            <Header>
                <Image source={logoImg} />
                <Image source={profileImg} />
            </Header>
            <StatisticsCard />
            <MealsText>Refeições</MealsText>
        </Container>
    );
}
