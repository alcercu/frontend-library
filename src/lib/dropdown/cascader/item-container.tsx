import React from "react";
import styled from "styled-components";
import BaseItem from "../base-item";
import BaseItemContainer from "../base-item-container";
import LightArrow from "../../../assets/svgs/arrows/light-left.svg";

export const StyledBaseItem = styled(BaseItem)`
  position: relative;

  .item-icon {
    position: absolute;
    transform: rotate(180deg);
    right: 16px;
    fill: ${({ selected, theme }) =>
      selected
        ? theme.klerosUIComponentsPrimaryBlue
        : theme.klerosUIComponentsStroke};
  }

  .count-display {
    position: absolute;
    right: 32px;
    border-color: ${({ selected, theme }) =>
      selected
        ? theme.klerosUIComponentsPrimaryBlue
        : theme.klerosUIComponentsStroke};
    color: ${({ selected, theme }) =>
      selected
        ? theme.klerosUIComponentsPrimaryBlue
        : theme.klerosUIComponentsStroke};
  }
`;

export interface IItem {
  label: string;
  value: number | string;
  children?: IItem[];
}

interface IItemContainer {
  layer: { items: IItem[]; selected?: IItem["value"] };
  onChange: (item: IItem) => void;
}

const ItemContainer: React.FC<IItemContainer> = ({
  layer,
  onChange,
  ...props
}) => (
  <BaseItemContainer {...props}>
    {layer.items.map((item, i) => (
      <StyledBaseItem
        tabIndex={0}
        key={i}
        text={item.label}
        Icon={item.children && LightArrow}
        onClick={() => onChange(item)}
        childrenCount={item.children?.length}
        selected={item.value === layer.selected}
      />
    ))}
  </BaseItemContainer>
);

export default ItemContainer;
