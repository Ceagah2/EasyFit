import styled from "styled-components/native";
import { colors, sizes } from "../../../theme";
import { useResponsive } from "../../../hooks/useResponsive";

export const Title = styled.Text`
  color: ${colors.radiantPurple};
  font-size: ${useResponsive(sizes.title)};
  font-family: 'Lato_700Bold';
`;