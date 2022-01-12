import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Bullet from "./horizontal-bullet";

const Wrapper = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BulletsContainer = styled.div`
  width: auto;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const LastBullet = styled(Bullet)`
  flex-basis: auto;
  flex-grow: 0;
`;

const HorizontalSteps = ({ items, currentItemIndex, ...props }) => (
  <Wrapper {...props}>
    <BulletsContainer>
      {items.slice(0, -1).map(({ title }, i) => (
        <Bullet
          {...{ title }}
          completed={i < currentItemIndex}
          active={i === currentItemIndex}
          line={!(i + 1 === items.length)}
          index={i + 1}
          key={i}
        />
      ))}
    </BulletsContainer>
    <LastBullet
      title={items.at(-1).title}
      completed={items.length - 1 < currentItemIndex}
      active={items.length - 1 === currentItemIndex}
      index={items.length}
    />
  </Wrapper>
);

HorizontalSteps.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentItemIndex: PropTypes.number.isRequired,
};

export default HorizontalSteps;
