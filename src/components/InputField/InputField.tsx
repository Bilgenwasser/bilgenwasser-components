import { KeyboardType, TextInput } from "react-native"
import styled from "styled-components"
import { StyledColorProps, ThemeProps } from "../../types/primitivTypes"
import { universalColors } from "../../utils/theming/colors"
import { getTheme } from "../../utils/theming/getTheme"

interface InputFieldProps extends ThemeProps {
    value?: string
    setValue?: (value: string) => void
    editable?: boolean
    keyboardType?: KeyboardType
    placeholderText?: string
    maxLength?: number
    hideText?: boolean
    endText?: boolean
    alignRight?: boolean
}

interface StyledTextInputProps extends StyledColorProps {
    endText: boolean
    alginRight: boolean
}

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
    return (
        <StyledTextInput
            value={value}
            onChangeText={setValue}
            editable={editable}
            keyboardType={keyboardType}
            placeholder={placeholderText}
            placeholderTextColor={universalColors.SystemGray}
            maxLength={maxLength}
            secureTextEntry={hideText}
            color={getTheme(forceTheme, universalColors.SystemWhite, universalColors.SystemBlack)}
            endText={!!endText}
            alginRight={!!alignRight}
        ></StyledTextInput>
    )
}

export default InputField

const StyledTextInput = styled(TextInput)<StyledTextInputProps>`
    ${({ endText }) => !endText && "width: 100%;"}
    height: 24px;
    color: ${({ color }) => color};
    font-size: 16px;
    text-align: ${({ alginRight }) => (alginRight ? "right" : "left")};
    margin: 5px 0;
`
