import * as S from './styles';
interface IPageTitle {
  title: string
}
export const PageTitle = (props: IPageTitle) => {
  return(
    <S.Title>{props.title}</S.Title>
  )
}