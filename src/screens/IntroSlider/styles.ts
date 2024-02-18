import styled from "styled-components/native";
import { colors, sizes } from "../../theme";


export const SlideContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${colors.radiantPurple};
`
export const SlideImage = styled.Image`
  width: 500px;
  height: 500px;
`
export const TextContainer = styled.View`
  align-items: center;
  justify-content: center;
`
export const SlideTitle = styled.Text`
  color: ${colors.white};
  font-size: ${sizes.title};
  font-family: 'Lato_700Bold';
`;
export const SlideText = styled.Text`
  color: ${colors.white};
  font-size: ${sizes.body};
  font-family: 'Montserrat_400Regular';
  padding: 10px;
`
export const SlideFooter = styled.View``
export const BackButton = styled.TouchableOpacity``
export const NextButton = styled.TouchableOpacity``
export const DoneButton = styled.TouchableOpacity``