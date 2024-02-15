import React from 'react';
import * as S from './styles'
import { IContainer } from '../../../types';

export const AppContainer = ({children}:IContainer) => {
  return(
    <S.Container>
      {children}
    </S.Container>
  )
}