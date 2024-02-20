import styled from 'styled-components/native';
import { colors, sizes } from '../../../theme';

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: ${colors.lightPink};
`;
export const LoginForm = styled.View`
  width: 90%;
  height: 60%;
  align-items: center;
  justify-content: center;
  z-index: 2;
  border-radius: 24px;
  background: ${colors.lightGray};
  border: 1px solid ${colors.lightGray};
  box-shadow: 1px 4px 5px ${colors.black};
`;

export const LoginFormTitle = styled.Text`
  color: ${colors.royalBlue};
  font-size: ${sizes.title};
  font-family: 'Lato_700Bold';
  margin-bottom: 20px;
`;
export const InputContainer = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  width: 95%;
  height: 50px;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${colors.black};
`;
export const Label = styled.Text`
  color: ${colors.royalBlue};
  font-size: ${sizes.body};
  font-family: "Lato_400Regular";
  text-align: left;
  padding: 10px;
`;

export const SocialLoginContainer = styled.View`

`;
export const ButtonText = styled.Text`
  color: ${colors.royalBlue};
  font-size: ${sizes.body};
  font-family: "Lato_400Regular";
  text-align: center;
`;
export const SocialButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin-top: 24px;
`;

export const SignUpOrRecover = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 10px;
`;
export const SignUpOrRecoverText = styled.Text`
  color: ${colors.radiantPurple};
  font-size: ${sizes.body};
  font-family: "Lato_400Regular";
  text-align: center;
`;