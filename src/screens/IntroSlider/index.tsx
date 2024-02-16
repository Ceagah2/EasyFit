import * as S from './styles'
import AppIntroSlider from 'react-native-app-intro-slider'
import { AppContainer } from '../../components/atoms/container'
import AlongamentoMenina from '../../assets/alongamento-menina.png'
import FuncionalMenina from '../../assets/alongamento/funcional-menina.png'
import FuncionalMenino from '../../assets/alongamento/funcional-menino.png'
import Treinadoras from '../../assets/alongamento/treinadoras.png'
import { isOnboarded } from '../../store/atoms'
import { useAtom } from 'jotai'

export default function IntroSlider() {
  const [, setIsOnboarded] = useAtom(isOnboarded)
  const slides = [
    {
      key: 1,
      title: 'Alongue-se corretamente.',
      text: 'Estique, respire, relaxe! \n Vamos começar com alongamentos que fazem você se sentir tão solto quanto um gato no sol. \nPronto para essa viagem de flexibilidade?',
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
    return(
      <S.DoneButton onPress={() => setIsOnboarded(true)}></S.DoneButton>
    )
  }
  const onSkip = () => {
    return(
      <S.NextButton onPress={() => setIsOnboarded(true)}></S.NextButton>
    )
  }
  const RenderItem = ({item}:any) => {
    return(
      <>
        <S.SlideImage source={item.image}/>
        <S.TextContainer>
          <S.SlideTitle>{item.title}</S.SlideTitle>
          <S.SlideText>{item.text}</S.SlideText>
        </S.TextContainer>
      </>
    )
  }
  return(
    <AppContainer>
      <S.SlideContainer>
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          onSkip={onSkip}
          showNextButton
          showPrevButton
        />
      </S.SlideContainer>
    </AppContainer>
  )
}