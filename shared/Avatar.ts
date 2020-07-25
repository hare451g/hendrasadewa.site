import styled, { css } from 'styled-components';
import { SpaceProps, space } from 'styled-system';

enum avatarSizes {
  sm = '32px',
  md = '64px',
  lg = '100px',
  xl = '150px',
}

enum borderRadius {
  circle = '50%',
  rounded = '8px',
  square = '0%',
}

type AvatarProps = SpaceProps & {
  size?: keyof typeof avatarSizes;
  type?: keyof typeof borderRadius;
};

const Avatar = styled.img<AvatarProps>(
  ({ size = 'md', type = 'circle' }) => css`
    height: ${avatarSizes[size]};
    width: ${avatarSizes[size]};
    border-radius: ${borderRadius[type]};
    object-fit: cover;
    ${space}
  `
);

export default Avatar;
