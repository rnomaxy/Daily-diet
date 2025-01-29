import { Container, Subtitle, Title, StatisticButton, StatisticIcon } from "./styles";

export function StatisticsCard() {
    return (
        <Container>
            <StatisticButton>
                <StatisticIcon />
            </StatisticButton>
            <Title>90,86%</Title>
            <Subtitle>das refeições dentro da dieta</Subtitle>
        </Container>
    );
}