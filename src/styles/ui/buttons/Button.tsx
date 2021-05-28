import React from "react";
import styled from "styled-components";
// styles
import * as colors from "styles/colors";
import { P } from "styles/typography";

interface Props {
  style?: {};
  textStyle?: {};
  children?: React.Component;
  customChildren?: React.Component;
  [key: string]: any;
}

export default function ({
  style,
  children,
  textStyle,
  customChildren,
  ...props
}: Props) {
  return (
    <Button style={style} {...props}>
      {customChildren ? (
        customChildren
      ) : (
        <P f18 style={{ color: colors.WHITE, ...textStyle }}>
          {children}
        </P>
      )}
    </Button>
  );
}

const Button = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  outline: none;
  background-color: ${({ backColor }: any) => {
    if (backColor) return backColor;
    return colors.PRIMARY;
  }};

  border-radius: 30px;

  padding: 16px 20px;
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
