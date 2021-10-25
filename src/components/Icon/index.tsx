import React, { FC } from 'react';

import Image from '../Image';

import MenuIcon from './files/menu.svg';
import ScrollDown from './files/scroll_down.svg';
import SocialLinkedin from './files/social_linkedin.svg';
import SocialInstagram from './files/social_instagram.svg';

const ICONS_MAP = new Map([
  ['menu', MenuIcon],
  ['scroll_down', ScrollDown],
  ['social_linkedin', SocialLinkedin],
  ['social_instagram', SocialInstagram]
]);

type Props = {
  className?: string;
  type: string;
};

const Icon: FC<Props> = ({ type, className }: Props) => {
  if(!ICONS_MAP.has(type)) return null;

  const icon = ICONS_MAP.get(type);

  return <Image className={className} src={icon.src} alt="" width={icon.width} height={icon.height} />;
};

export default Icon;