import React from "react";
import styled from "styled-components";
// styles
import * as colors from "styles/colors";
import { P } from "styles/typography";

interface Props {
  style?: {};
  textStyle?: {};
  children?: string;
  customChildren?: React.Component;
  [key: string]: any;
}

function Button({
  style,
  children,
  textStyle,
  customChildren,
  ...props
}: Props) {
  return (
    <StyledButton style={style} {...props}>
      {customChildren ? (
        customChildren
      ) : (
        <P f18 style={{ color: colors.WHITE, ...textStyle }}>
          {children}
        </P>
      )}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  outline: none;
  background-color: ${({ backColor }: any) => {
    if (backColor) return backColor;
    return colors.PRIMARY;
  }};

  border-radius: 3rem;

  padding: 1.4rem 2rem;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s;

  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${colors.PRIMARY};
  }

  &:active {
    background-color: ${colors.PRIMARY};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
`;
