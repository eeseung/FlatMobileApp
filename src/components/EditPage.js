import React, {useState} from 'react';
import { MusicSheet } from "./MusicSheet";
import { View, ScrollView } from "react-native";

const getTop = (note) => {
    switch (note) {
        case "C4":
            return 60;
        case "D4":
            return 62;
        case "E4":
            return 64;
        case "F4":
            return 65;
        case "G4":
            return 67;
        case "A4":
            return 69;
        case "B4":
            return 71;
        case "C5":
            return 72;
        default:
            return 60;
    }
}

const getLeft = (index) => {
    return index * 30 + 20
}

const [notes, setNotes] = useState(["C4", "F4", "A4", "D4", "G4", "C4", "F4", "A4", "D4", "G4", "C4", "F4", "A4", "D4", "G4"]);
const X = notes.map((note) => getTop(note)*2)
const Y = notes.map((note, index) => getLeft(index))
const result = X.map((x, i) => {
    return [x, Y[i]]
})

export const EditPage = () => {
    return (
        <View>
            <ScrollView horizontal={true}>
                {<MusicSheet positions={result}/>}
            </ScrollView>
        </View>
    )
}
