import React from "react";
import styled from "styled-components";
// styles
import * as colors from "styles/colors";
import * as sizes from "styles/sizes";

interface Props {
  style?: {};
  inputStyle?: {};
  label?: string;
  button?: React.Component;
  [key: string]: any;
}

function Input({ style, inputStyle, button, label, ...props }: Props) {
  return (
    <div style={style}>
      <Label htmlFor={label}>{label}</Label>
      <Content>
        <StyledInput type="text" id={label} style={inputStyle} {...props} />
        {button ? button : null}
      </Content>
    </div>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-color: ${colors.BORDER_GREY};
  border-bottom: 1px solid black;
`;
const Label = styled.label`
  font-size: 1.4rem;
  font-weight: bold;
  white-space: nowrap;
  color: ${colors.FONT};
`;
const StyledInput = styled.input`
  flex: 1;
  height: ${sizes.INPUT_HEIGHT};
  font-size: 1.4rem;
`;

function areEqual(prevProps: Props, nextProps: Props) {
  if (
    prevProps.button !== nextProps.button ||
    prevProps.label !== nextProps.label
  )
    return false;
  return true;
}

export default React.memo(Input, areEqual);
