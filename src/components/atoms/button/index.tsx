
import { IButton } from '../../../types';
import * as S from './styles'

export const Button = (props: IButton) => {
  return(
    <S.Container 
      backgroundColor={props.backgroundColor} 
      onPress={props.onPress}
      border={props.border}
      borderColor={props.borderColor}
      width={props.width}
      height={props.height}
    >
      <S.ButtonText color={props.color}>{props.title}</S.ButtonText>
    </S.Container>
  )
}