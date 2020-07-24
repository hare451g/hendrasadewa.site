import styled, { css } from 'styled-components';

enum avatarSizes {
  sm = '32px',
  md = '64px',
  lg = '100px',
}

enum borderRadius {
  circle = '50%',
  rounded = '8px',
  square = '0%',
}

type AvatarProps = {
  size: keyof typeof avatarSizes;
  type: keyof typeof borderRadius;
};

const Avatar = styled.img<AvatarProps>(
  ({ size = 'md', type = 'circle' }) => css`
    height: ${avatarSizes[size]};
    border-radius: ${borderRadius[type]};
  `
);

export default Avatar;
