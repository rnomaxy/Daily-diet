import { Container, Content, MealTime, Meal, HealthyStatus, Separator, HealthyStatusSTypeStyleProps } from "./styles";

export function MealCard() {
    return (
        <Container>
            <Content>
                <MealTime>20:00</MealTime>
                <Separator>|</Separator>
                <Meal numberOfLines={1} ellipsizeMode="tail">X-tudo</Meal>
                <HealthyStatus type="UNHEALTHY"/>
            </Content>
        </Container>
    );
}