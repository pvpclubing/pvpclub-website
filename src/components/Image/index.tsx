import React from 'react';

type Props = {
  src: string;
  alt: string;
  width: number | string;
  height?: number | string;
  className?: string;
}

const Image: React.FC<Props> = ({
  src,
  width,
  height,
  alt,
  className,
  ...props
}: Props) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      loading={'lazy'}
      draggable={false}
      {...props}
    />
  );
};

export default Image;
