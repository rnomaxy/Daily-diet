import { useState } from "react";
import { Image, SectionList, TouchableOpacity } from "react-native";
import { Plus } from "phosphor-react-native";

import { Container, Header, MealsText, SectionTitle } from './styles';

import logoImg from "@assets/Logo.png";
import profileImg from "@assets/Ellipse.png"

import { HealthStatus } from "src/@types/status";
import { StatisticsCard } from "@components/StatisticsCard";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";
import { MealsEmpty } from "@components/MealsEmpty";

type MealProps = {
    mealTime: string;
    meal: string;
    type: HealthStatus
}

type MealSection = {
    title: string;
    data: MealProps[];
};

export function Home() {
    const [meals, setMeals] = useState<MealSection[]>([
        {
            title: "12.08.22",
            data: [
                { mealTime: "20:00", meal: "X-tudo", type: "UNHEALTHY" },
                { mealTime: "16:00", meal: "Whey protein com leite", type: "HEALTHY" },
                { mealTime: "12:30", meal: "Salada cesar com frango grelhado", type: "HEALTHY" },
                { mealTime: "09:30", meal: "Vitamina de banana com abacate", type: "HEALTHY" },
            ],
        },
        {
            title: "11.08.22",
            data: [{ mealTime: "20:00", meal: "X-tudo", type: "UNHEALTHY" }],
        },
    ]);

    function handleMealDetails(meal: MealProps) {
        console.log("Detalhes da refeição:", meal);
    }

    return (
        <Container>

            <Header>
                <Image source={logoImg} />
                <Image source={profileImg} />
            </Header>
            <StatisticsCard type="HEALTHY" />
            <MealsText>Refeições</MealsText>
            <Button
                title="Nova refeição"
                icon={Plus}
            />
            <SectionList
                sections={meals}
                keyExtractor={(item, index) => `${item.mealTime}-${index}`}
                stickySectionHeadersEnabled={false}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleMealDetails(item)}>
                        <MealCard {...item} />
                    </TouchableOpacity>
                )}
                renderSectionHeader={({ section }) => (
                    <SectionTitle>{section.title}</SectionTitle>
                )}

                contentContainerStyle={
                    meals.length === 0 && { flex: 1, justifyContent: "center" }
                }
                ListEmptyComponent={() => (<MealsEmpty />)}
                showsVerticalScrollIndicator={false}
            />

        </Container>
    );
}
