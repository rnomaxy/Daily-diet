import { Container, Title } from "./styles";

export function MealsEmpty() {
    return (
        <Container>
            <Title>
                Não há refeições registradas ainda.{"\n"}
                Vamos registrar uma refeição hoje?
            </Title>
        </Container>
    );
};