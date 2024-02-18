import { useNavigation } from "@react-navigation/native"
import { useAtom } from 'jotai'
import AppIntroSlider from 'react-native-app-intro-slider'
import AlongamentoMenina from '../../assets/alongamento-menina.png'
import FuncionalMenina from '../../assets/funcional-menina.png'
import FuncionalMenino from '../../assets/funcional-menino.png'
import Treinadoras from '../../assets/treinadoras.png'
import { isOnboardedAtom } from "../../store/atoms"
import { colors } from '../../theme'
import * as S from './styles'

export default function IntroSlider() {
  const [isOnboarded, setIsOnboarded] = useAtom(isOnboardedAtom)
  console.log("isOnboarded",isOnboarded)
  const navigator = useNavigation();
  const slides = [
    {
      key: 1,
      title: 'Alongue-se corretamente.',
      text: 'Estique, respire, relaxe! \nVamos começar com alongamentos que fazem você se sentir tão solto quanto um gato no sol. \nPronto para essa viagem de flexibilidade?',
      image: AlongamentoMenina
    },
    {
      key: 2,
      title: 'Exercícios funcionais',
      text: 'Hora de colocar o corpo em movimento! \nNossos exercícios são como a festa dos músculos - práticos, divertidos e com uma pitada de desafio. \nVamos nessa?',
      image: FuncionalMenina
    },
    {
      key: 3,
      title: 'Exercícios unissex',
      text: 'Aqui, todos são bem-vindos!\nQueremos quebrar barreiras, então esqueça rótulos. \nNossos exercícios são para todos, independente de gênero. Todo mundo pode se jogar nessa!',
      image: FuncionalMenino
    },
    {
      key: 4,
      title: 'Acesso às Treinadoras',
      text: 'Conheça nossas treinadoras - as suas parceiras de treino. \nElas estão aqui para te apoiar, te desafiar e, é claro, fazer você sorrir durante o percurso.\n Vamos nessa juntos?',
      image: Treinadoras
    }
  ];

  const onDone = () => {
    setIsOnboarded(true)
    navigator.navigate('Login')
  }
  const RenderItem = ({item}:any) => {
    return(
      <S.SlideContainer>
        <S.SlideImage source={item.image}/>
        <S.TextContainer>
          <S.SlideTitle>{item.title}</S.SlideTitle>
          <S.SlideText>{item.text}</S.SlideText>
        </S.TextContainer>
      </S.SlideContainer>
    )
  }
  return(
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={onDone}
        showNextButton
        showPrevButton
        dotStyle={{
          backgroundColor: colors.white
        }}
        activeDotStyle={{
          backgroundColor: colors.royalBlue
        }}
        nextLabel='Próximo'
        skipLabel='Pular'
        doneLabel='Pronto'
        prevLabel="Anterior"
      />
  )
}