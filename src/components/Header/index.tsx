import React, { FC } from 'react';
import styled from 'styled-components';
import Link from '../Link';
import Image from '../Image';

const Header: FC = () => {
  return (
    <Container>
      <SocialWrapper>
        <Link href={'#'}>
          <DiscordLogo src={'assets/images/discord-logo-white.png'} alt={''} width={40} />
        </Link>
      </SocialWrapper>
    </Container>
  );
};

const Container = styled.header`
  height: 100px;
  align-items: center;
  background-color: transparent;
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: end;
  height: 45px;
`;

const DiscordLogo = styled(Image)``;

export default Header;