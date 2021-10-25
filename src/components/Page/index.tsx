import React, { FC, ReactNode } from 'react';

import Head from 'next/head';
import styled from 'styled-components';

type Props = {
  title: string;
  className?: string;
  children: ReactNode;
};

const Page: FC<Props> = ({ children, className, title }: Props) => {
  return (
    <PageContainer className={className}>
      <Head>
        <title>PVPClub - {title}</title>
      </Head>
      {children}
    </PageContainer>
  );
};

const PageContainer = styled.article`
`;

export default Page;