import styled, { css } from 'styled-components';
import {
  LayoutProps,
  layout,
  SpaceProps,
  space,
  BorderProps,
  border,
} from 'styled-system';

type DividerPropsType = LayoutProps & SpaceProps & BorderProps;

const Divider: React.SFC<DividerPropsType> = styled.hr<DividerPropsType>(
  ({ theme: { colors } }) => css`
    ${layout};
    ${space};
    ${border};
    border-color: ${colors.text.body};
  `
);

export default Divider;
