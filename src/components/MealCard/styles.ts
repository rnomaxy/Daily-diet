import styled, { css } from "styled-components/native";

import { HealthStatus } from "src/@types/status";

type Props = {
    type: HealthStatus;
}

export const Container = styled.View`
flex: 1;
`;

export const Content = styled.View`
flex-direction: row;
align-items: center;

max-height: 56px;
min-height: 56px;
margin-bottom: 10px;
padding-left: 16px;
gap: 5px;

border-radius: 5px;
border-width: 1px;
border-color: ${({ theme }) => theme.COLORS.GRAY500};
`;

export const Separator = styled.Text`
${({ theme }) => css`
color: ${theme.COLORS.GRAY400};
font-family: ${theme.FONT_FAMILY.REGULAR};
font-size: ${theme.FONT_SIZE.XL}px;
`}
margin: 0 8px;
`;

export const MealTime = styled.Text`
${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.BOLD};
font-size: ${theme.FONT_SIZE.MD}px;
color: ${theme.COLORS.GRAY100};
`};
`;

export const Meal = styled.Text`
${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.REGULAR};
font-size: ${theme.FONT_SIZE.MD}px;
color: ${theme.COLORS.GRAY200};
`};
flex-shrink: 1;  
max-width: 60%;  
overflow: hidden;
`;

export const HealthyStatus = styled.View<Props>`
position: absolute;
right: 15px;
width: 15px;
height: 15px;
border-radius: 10px;

background-color: ${({ theme, type }) => type === "HEALTHY" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;