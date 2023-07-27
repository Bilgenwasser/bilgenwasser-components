import RNDateTimePicker from "@react-native-community/datetimepicker"
import { format } from "date-fns"
import { useState } from "react"
import { Platform, TouchableOpacity, View } from "react-native"
import styled from "styled-components"
import Box from "../Box/Box"
import { DatePickerProps } from "./DatePicker.types"
import PrimaryText from "../PrimaryText/PrimaryText"

const DatePicker = ({ date, setDate, minDate, maxDate }: DatePickerProps) => {
    const [showPicker, setShowPicker] = useState(false)
    const locale = "de-DE"

    if (Platform.OS === "android") {
        return (
            <View>
                <TouchableOpacity onPress={() => setShowPicker(true)}>
                    <Box sheet noMargin>
                        <StyledView>
                            <PrimaryText>{format(date, "dd.MM.yy")}</PrimaryText>
                        </StyledView>
                    </Box>
                </TouchableOpacity>
                {showPicker && (
                    <RNDateTimePicker
                        value={date}
                        locale={locale}
                        onChange={(event, date: Date | undefined) => {
                            setShowPicker(false)
                            if (event.type === "set") setDate(date!)
                        }}
                        minimumDate={minDate}
                        maximumDate={maxDate}
                    />
                )}
            </View>
        )
    } else {
        return (
            <RNDateTimePicker
                value={date}
                locale={locale}
                onChange={(event, date) => setDate(date!)}
                minimumDate={minDate}
                maximumDate={maxDate}
            />
        )
    }
}

export default DatePicker

const StyledView = styled(View)`
    padding: 3px;
`
