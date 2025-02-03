import { Container, Content, MealTime, Meal, HealthyStatus, Separator } from "./styles";

import { HealthStatus } from "src/@types/status";

type Props = {
    mealTime: string;
    meal: string;
    type: HealthStatus;
}

export function MealCard({ mealTime, meal, type }: Props) {
    return (
        <Container>
            <Content>
                <MealTime>{mealTime}</MealTime>
                <Separator>|</Separator>
                <Meal numberOfLines={1} ellipsizeMode="tail">{meal}</Meal>
                <HealthyStatus type={type} />
            </Content>
        </Container>
    );
}