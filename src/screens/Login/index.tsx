import { useAtomValue } from "jotai";
import { Text } from "react-native";
import { AppContainer } from "../../components/atoms/container";
import { isOnboardedAtom } from "../../store/atoms";

export default function Login() {
  const onboarded = useAtomValue(isOnboardedAtom)
  console.log("is onboarded ?",onboarded)
  return(
    <AppContainer>
      <Text>Login</Text>
    </AppContainer>
  )
}