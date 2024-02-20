import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button } from "../../../components/atoms/button";
import { colors } from "../../../theme";
import * as S from './styles';

export default function Login() {
  const navigator = useNavigation();
  const [ userData, setUserData ] = useState({
    email: '',
    password: ''
  })

  const handleLogin = () => {
    console.log(userData)
  }

  return (
    <S.Content>
      <S.LoginForm>
        <S.LoginFormTitle>Faça login e inicie a jua jornada</S.LoginFormTitle>
        <S.InputContainer>
          <S.Label>E-mail</S.Label>
          <S.Input
            placeholder="E-mail"
            value={userData.email}
            onChangeText={(text) => setUserData({ ...userData, email: text })}
          />
          <S.Label>Senha</S.Label>
          <S.Input
            placeholder="Senha"
            value={userData.password}
            secureTextEntry
            onChangeText={(text) =>
              setUserData({ ...userData, password: text })
            }
          />
        </S.InputContainer>
        <Button title="Entrar" width={200} height={60} onPress={handleLogin} />
        <S.SignUpOrRecover onPress={() => navigator.navigate("SignUp")}>
          <S.SignUpOrRecoverText>
            Ainda nāo tem uma conta ? Clique aqui e registre-se{" "}
          </S.SignUpOrRecoverText>
        </S.SignUpOrRecover>
        <S.SocialLoginContainer>
          <S.ButtonText>
            Ou se preferir vincule-se com umas das redes abaixo.
          </S.ButtonText>
          <S.SocialButtons>
            <Icon name="facebook" size={30} color={colors.royalBlue} onPress={() => console.log('facebook')}/>
            <Icon name="google" size={30} color={colors.radiantRed} onPress={() => console.log('google')} style={{marginLeft: 10}} />
          </S.SocialButtons>
        </S.SocialLoginContainer>
      </S.LoginForm>
    </S.Content>
  );
}