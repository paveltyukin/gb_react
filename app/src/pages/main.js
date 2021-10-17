import React from 'react';
import { Header, MainPageTemplate } from '../components';

export function MainPage() {
  return (
    <div>
      <MainPageTemplate header={<Header />}>
        Главная страница
      </MainPageTemplate>
    </div>
  );
}