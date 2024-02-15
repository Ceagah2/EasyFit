import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
export const useResponsive = (size: number) => {
  if (deviceHeight <= 568) {
    return Math.round(size);
  } else if (deviceHeight <= 667) {
    return `${Math.round(size * 1.2)}px`; //Math.round(size * 1.17);
  } else if (deviceHeight <= 736) {
    return `${Math.round(size * 1.3)}px`; //Math.round(size * 1.29);
  } else if (deviceHeight <= 1024) {
    return `${Math.round(size * 1.4)}px`;
  }
};

// Tabela de conversão de valores
// 10 =>	7
// 12 =>	9
// 14 =>	10
// 16 =>	11
// 17 =>	12
// 18 =>	13
// 20 =>	14
// 22 =>	16
// 24 =>	17
// 26 =>	19
// 30 =>	21
// 35 =>	25
// 38 =>	27
// 40 =>	29
// 56 =>	40
// 70 =>	50
// 100=>	71