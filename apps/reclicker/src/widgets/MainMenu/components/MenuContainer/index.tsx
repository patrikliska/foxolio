import Screw from '../../../../components/Screw';
import { StyledMenuContainer, StyledMenuContainerContent } from './styles';

interface MenuContainerProps {
  children?: React.ReactNode;
  width: number;
}

const MenuContainer = ({ children, width }: MenuContainerProps) => (
  <div css={StyledMenuContainer(width)}>
    <Screw />
    <div css={StyledMenuContainerContent()}>{children}</div>
    <Screw last />
  </div>
);

export default MenuContainer;
