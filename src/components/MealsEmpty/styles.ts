import styled, {css} from "styled-components/native";

export const Container = styled.View`
justify-content: center;
height: 85%;

border-radius: 5px;
border-width: 1px;
border-color: ${({ theme }) => theme.COLORS.GRAY500};
`;

export const Title = styled.Text`
${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.REGULAR};
font-size: ${theme.FONT_SIZE.LG}px;
color: ${theme.COLORS.GRAY300};
`};
text-align: center
`; 