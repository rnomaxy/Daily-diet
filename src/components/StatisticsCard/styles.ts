import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native"

export const Container = styled.View`
height: 15%;
margin-top: 30px;
border-radius: 10px;

justify-content: center;
align-items: center;

background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const Title = styled.Text`
${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.BOLD};
font-size: ${theme.FONT_SIZE.XXXL}px;
color: ${theme.COLORS.GRAY100};
`};
`;

export const Subtitle = styled.Text`
${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.REGULAR};
font-size: ${theme.FONT_SIZE.LG}px;
color: ${theme.COLORS.GRAY100};
`};
`;

export const StatisticButton = styled.TouchableOpacity`
position: absolute;
top: 8px;
right: 8px;
margin: 5px;
`;

export const StatisticIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
    size: 25,
    color: theme.COLORS.GREEN_DARK
}))``;