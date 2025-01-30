import { ElementType } from "react";
import { Pressable, PressableProps } from "react-native";

import { IconProps } from "phosphor-react-native";
import { useTheme } from "styled-components";

import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = PressableProps & {
    title: string;
    type?: ButtonTypeStyleProps;
    icon?: ElementType<IconProps>;
}

export function Button({ title, type = "PRIMARY", icon: Icon, ...rest }: Props) {
    const theme = useTheme();

    const iconColor = type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY100

    return (
        <Pressable {...rest}>
            {({ pressed }) => (
                <Container
                    type={type}
                    isPressed={pressed}
                >
                    {Icon && <Icon size={18} color={iconColor} />}
                    <Title type={type}>
                        {title}
                    </Title>
                </Container>)}
        </Pressable>
    );
}