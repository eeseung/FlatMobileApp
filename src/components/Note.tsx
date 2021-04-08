import React from "react";
import styled from "styled-components/native";

interface StyleProps {
  x: number;
  y: number;
}

type NoteProps = {
  x: number,
  y: number
}

const NoteContainer = styled.View<StyleProps>`
  position: absolute;
  left: ${props => props.x}px;
  bottom: ${props => props.y}px;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: white;
`;

export const Note = ({x, y}: NoteProps) => {
  return(
    <NoteContainer x={x} y={y}/>

  )
}

Note.defaultProps = {
  x: 0,
  y: 0
}
