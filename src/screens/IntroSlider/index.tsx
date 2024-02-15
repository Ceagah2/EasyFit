import * as S from './styles'
import { AppContainer } from '../../components/atoms/container'
import { Text } from 'react-native'

export default function IntroSlider() {
  const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'Description.\nSay something cool',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
    },
    {
      key: 3,
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    }
  ];
  return(
    <AppContainer>
      <Text>Intro</Text>
    </AppContainer>
  )
}