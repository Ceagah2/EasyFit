import styled from "styled-components/native";
import { colors, sizes } from "../../../theme";
import { useResponsive } from "../../../hooks/useResponsive";

export const Title = styled.Text`
  color: ${colors.navy};
  font-size: ${useResponsive(sizes.subtitle)};
  font-family: 'Montserrat_700Bold';
  text-align: left;
  padding-left: 10px;
  margin: 10px;
`;