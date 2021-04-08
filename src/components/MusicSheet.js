import React, { Component } from "react";
import {Note} from "./Note";
import styled from "styled-components/native";

const NoteContainer = styled.View`
  position: relative;
  display: flex;
  height: 250px;
  width: ${props => props.width}px;
  background-color: black;
`;

export const MusicSheet = ({positions}) => {
  return (
    <NoteContainer width={positions.length}>
      {positions.forEach(pos => {
        <Note x={pos.x} y={pos.y}/>
      })}
    </NoteContainer>
  )
}

MusicSheet.defaultProps = {

}
