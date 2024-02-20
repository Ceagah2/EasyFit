import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import * as S from './styles';

export default function SignUp() {
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
        <TouchableOpacity onPress={() => navigator.navigate('Login')}>
          <S.Label> Voltar para Login</S.Label>
        </TouchableOpacity>
      </S.LoginForm>
    </S.Content>
  );
}