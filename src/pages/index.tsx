import React from 'react';

import type { NextPage } from 'next';

import Page from 'src/components/Page';
import styled from 'styled-components';
import Image from 'src/components/Image';

const Home: NextPage = () => {
  return (
    <PageContainer
      title="Accueil"
    >
      <BackgroundContainer>
        <BackgroundImage src={'/assets/images/background.png'} alt={''} width={'100%'} height={'100%'} />
      </BackgroundContainer>
      <Content>
        <Title>
          <Image src={'/assets/images/pvpclub-logo.png'} alt={''} width={350} />
        </Title>
        <Subtitle>Earn money... every week</Subtitle>
        <CitationBlock>
          <CitationText>“Take the practice, make it better”</CitationText>
        </CitationBlock>
      </Content>
    </PageContainer>
  );
};

const PageContainer = styled(Page)`
  text-align: center;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background-color: rgb(1, 17, 18);
  user-select: none;
  z-index: -1;
  overflow: hidden;
`;

const BackgroundImage = styled(Image)`
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
`;

const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 25px;
`;

const CitationBlock = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  width: 300px;
  text-align: center;
  padding: 10px 25px;
`;

const CitationText = styled.p`
  margin: 0;
  opacity: 1;
`;

export default Home;
