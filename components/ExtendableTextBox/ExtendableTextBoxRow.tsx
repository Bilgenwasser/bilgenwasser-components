import React, { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { optionalString, pickerType } from "../../shared/primitivTypes"
import Icon from "../Icon/Icon"
import InputField from "../InputField/InputField"
import Picker from "../Picker/Picker"
import HStack from "../Stacks/HStack"
import { TextBoxProps } from "./ExtendableTextBoxRow.types"

export const ExtendableTextBoxRow = ({
    icon,
    placeholderText1,
    placeholderText2,
    pickerItems,
    setValue,
    forceTheme,
}: TextBoxProps) => {
    const [text1, setText1] = useState<optionalString>(null)
    const [text2, setText2] = useState<optionalString | pickerType>(null)

    useEffect(() => {
        setValue && setValue({ text1, text2 })
    }, [text1, text2])

    return (
        <HStack style={styles.spacedContainer}>
            <HStack>
                <Icon name={icon} size={20} forceTheme={forceTheme} />
                <View style={styles.container}>
                    <InputField placeholderText={placeholderText1} setValue={setText1} />
                </View>
            </HStack>
            {pickerItems ? (
                <View style={styles.pickerContainer}>
                    <Picker
                        placeholderText={placeholderText2}
                        options={pickerItems}
                        setValue={setText2}
                        forceTheme={forceTheme}
                    />
                </View>
            ) : (
                <View style={styles.inputContainer}>
                    <InputField placeholderText={placeholderText2} setValue={setText2} />
                </View>
            )}
        </HStack>
    )
}

const styles = StyleSheet.create({
    spacedContainer: {
        width: "100%",
        padding: 15,
        justifyContent: "space-between",
    },
    pickerContainer: {
        marginBottom: -15,
        marginLeft: -50,
    },
    inputContainer: {
        width: "45%",
        overflow: "scroll",
    },
    container: {
        marginLeft: 15,
        width: "50%",
        overflow: "scroll",
    },
})
