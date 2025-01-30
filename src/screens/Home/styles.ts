import styled, { css } from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.COLORS.GRAY600};
padding: 24px;
`;

export const Header = styled.View`
margin-top: 25px;
flex-direction: row;
justify-content: space-between;
`;

export const MealsText = styled.Text`
${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.REGULAR};
font-size: ${theme.FONT_SIZE.LG}px;
color: ${theme.COLORS.GRAY100};
`};
margin-top: 40px;
`;

export const SectionTitle = styled.Text`
${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.BOLD};
font-size: ${theme.FONT_SIZE.XL}px;
color: ${theme.COLORS.GRAY100};
`};
margin-top:15px;
margin-bottom:10px;
`;