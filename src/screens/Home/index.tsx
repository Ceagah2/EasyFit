import React from 'react';
import { AppContainer } from '../../components/atoms/container';
import { PageTitle } from '../../components/atoms/pageTitle';
import { SectionTitle } from '../../components/atoms/sectionTitle';
import { View } from 'react-native';

export default function Home() {
  return (
    <AppContainer>
      <PageTitle title="Hello Home"/>
    </AppContainer>
  );
}