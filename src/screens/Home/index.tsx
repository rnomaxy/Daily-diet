import { useState } from "react";
import { Image, SectionList } from "react-native";
import { Plus } from "phosphor-react-native";

import { Container, Header, MealsText, SectionTitle } from './styles';

import logoImg from "@assets/Logo.png";
import profileImg from "@assets/Ellipse.png"

import { StatisticsCard } from "@components/StatisticsCard";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";
import { MealsEmpty } from "@components/MealsEmpty";

export function Home() {
    const [meals, setMeals] = useState([
        {
            title: "12.08.22",
            hour: ["20:00", "16:00", "12:30", "09:30"],
            data: ["X-tudo", "Whey protein com leite", "Salada cesar com frango grelhado", "Vitamina de banana com abacate"],
        },
        {
            title: "11.08.22",
            hour: ["20:00"],
            data: ["X-tudo"],
        },
    ]);

    return (
        <Container>

            <Header>
                <Image source={logoImg} />
                <Image source={profileImg} />
            </Header>
            <StatisticsCard />
            <MealsText>Refeições</MealsText>
            <Button
                title="Nova refeição"
                icon={Plus}
            />
            <SectionList
                sections={meals}
                keyExtractor={item => item}
                renderItem={() => <MealCard />}
                renderSectionHeader={({ section }) => (
                    <SectionTitle>{section.title}</SectionTitle>
                )}
                contentContainerStyle={
                    meals.length === 0 && { flex: 1, justifyContent: "center" }
                }
                ListEmptyComponent={() => (
                    <MealsEmpty />
                )}
                showsVerticalScrollIndicator={false}
            />

        </Container>
    );
}
