import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECUNDARY";

type Props = {
    type: ButtonTypeStyleProps;
    isPressed?: boolean;
}

export const Container = styled.View<Props>`
flex: 1;
margin-vertical: 10px;

justify-content: center;
align-items: center;
flex-direction: row;

min-height: 56px;
max-height: 56px;

border-radius: 6px; 
background-color: ${({ theme, type, isPressed }) =>
        isPressed
            ? type === "PRIMARY"
                ? theme.COLORS.GRAY100
                : theme.COLORS.GRAY500
            : type === "PRIMARY"
                ? theme.COLORS.GRAY200
                : "transparent"};
  border-color: ${({ theme, type }) => type === "PRIMARY" ? "transparent" : theme.COLORS.GRAY100};
  border-width: ${({ type }) => (type === "PRIMARY" ? 0 : 2)}px;
`;

export const Title = styled.Text<Props>`
${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.BOLD};
font-size: ${theme.FONT_SIZE.MD}px;
`};
color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY100};
margin-left: 10px;
`;