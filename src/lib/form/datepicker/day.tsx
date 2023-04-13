import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { useDay } from "@datepicker-react/hooks";
import DatepickerContext from "./datepickerContext";
import { button, small } from "../../../styles/common-style";

const StyledDayNumber = styled.small<{ isSelected: boolean }>`
  ${small}
  color: ${(props) =>
    props.isSelected
      ? props.theme.klerosUIComponentsWhiteBackground
      : props.theme.klerosUIComponentsSecondaryText} !important;
  font-weight: 600;
`;

const StyledButton = styled.button<{ isSelected: boolean }>`
  ${button}
  height: 24px;
  width: 24px;
  border-radius: 12px;
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.klerosUIComponentsPrimaryBlue
      : props.theme.klerosUIComponentsWhiteBackground};
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: ${(props) =>
      props.isSelected
        ? props.theme.klerosUIComponentsPrimaryBlue
        : props.theme.klerosUIComponentsSecondaryBlue};
    cursor: pointer;
    & ${StyledDayNumber} {
      color: ${({ theme }) =>
        theme.klerosUIComponentsWhiteBackground} !important;
    }
  }
`;

interface IDay {
  date: Date;
  dayLabel: string;
}

const Day: React.FC<IDay> = ({ date, dayLabel }) => {
  const dayRef = useRef(null);
  const { isSelected, onClick, onKeyDown, onMouseEnter, tabIndex } = useDay({
    dayRef,
    date,
    ...useContext(DatepickerContext),
  });
  return (
    <StyledButton
      ref={dayRef}
      {...{ isSelected, onClick, onKeyDown, onMouseEnter, tabIndex }}
    >
      <StyledDayNumber {...{ isSelected }}>{dayLabel}</StyledDayNumber>
    </StyledButton>
  );
};

export default Day;
