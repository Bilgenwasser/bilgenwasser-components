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
    const color = getTheme(forceTheme, universalColors.SystemWhite, universalColors.SystemBlack)

    return (
        <TextInput
            style={[
                styles.input,
                { width: endText ? undefined : "100%", color: color, textAlign: alignRight ? "right" : "left" },
            ]}
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

const styles = StyleSheet.create({
    input: {
        height: 24,
        fontSize: 16,
        marginVertical: 5,
    },
})
