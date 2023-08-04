import React from "react"
import { StyleSheet, TextInput } from "react-native"
import { universalColors } from "../../shared/colors"
import { getTheme } from "../../shared/getTheme"
import { InputFieldProps } from "./InputField.types"

const InputField = ({
    value,
    setValue,
    editable,
    keyboardType,
    placeholderText,
    maxLength,
    endText,
    forceTheme,
    hideText,
    alignRight,
}: InputFieldProps) => {
    const styles = StyleSheet.create({
        input: {
            width: endText ? undefined : "100%",
            height: 24,
            color: getTheme(forceTheme, universalColors.SystemWhite, universalColors.SystemBlack),
            fontSize: 16,
            textAlign: alignRight ? "right" : "left",
            marginVertical: 5,
        },
    })

    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={setValue}
            editable={editable}
            keyboardType={keyboardType}
            placeholder={placeholderText}
            placeholderTextColor={universalColors.SystemGray}
            maxLength={maxLength}
            secureTextEntry={hideText}
        ></TextInput>
    )
}

export default InputField
