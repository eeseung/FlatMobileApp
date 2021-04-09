import React, { Component } from "react";
import { Dimensions } from "react-native";
import {Note} from "./Note";
import styled from "styled-components/native";

const windowWidth = Dimensions.get("window").width;
const NoteContainer = styled.View`
  position: relative;
  display: flex;
  height: 250px;
  width: ${props => props.width > windowWidth ? props.width : windowWidth }px;
  background-color: black;
`;

export const MusicSheet = ({positions}) => {
  console.log("positions: ", positions);
  console.log("window width: ",  Dimensions.get("window").width)
  console.log("position length: ", positions.length*30+40)
  return (
    <NoteContainer width={positions.length*30+40}>
      {positions.map(pos =>
        <Note x={pos[1]} y={pos[0]}/>
      )}
    </NoteContainer>
  )
}

MusicSheet.defaultProps = {

}
