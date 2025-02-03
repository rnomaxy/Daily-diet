import { Container, Subtitle, Title, StatisticButton, StatisticIcon } from "./styles";

import { HealthStatus } from "src/@types/status";

type Props = {
    type: HealthStatus;
}

export function StatisticsCard({ type = "HEALTHY" }: Props) {
    return (
        <Container type={type}>
            <StatisticButton>
                <StatisticIcon type={type} />
            </StatisticButton>
            <Title>90,86%</Title>
            <Subtitle>das refeições dentro da dieta</Subtitle>
        </Container>
    );
}