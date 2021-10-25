import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Header from '../Header';

type Props = {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }: Props) => (
  <Container>
    <Header />
    {children}
  </Container>
);

const Container = styled.main``;

export default Layout;