import {FC} from "react";
import {ToolTipWrapper} from "./ToolTip-style";
interface IToolTipProps {
  content: string;
  title: string;
}
export const ToolTip: FC<IToolTipProps> = ({content, title}) => {
  return (
    <ToolTipWrapper content={content}>
      {title}
    </ToolTipWrapper>
  );
};