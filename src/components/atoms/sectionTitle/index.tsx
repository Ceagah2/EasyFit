import * as S from './styles';

interface ISectionTitle {
  title: string
}
export const SectionTitle = (props: ISectionTitle) => {
  return(
    <S.Title>{props.title}</S.Title>
  )
}