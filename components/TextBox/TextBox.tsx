import React from "react"
import { StyleSheet, View } from "react-native"
import { pickerType } from "../../shared/primitivTypes"
import Box from "../Box/Box"
import Divider from "../Divider/Divider"
import HStack from "../HStack/HStack"
import Icon from "../Icon/Icon"
import InputField from "../InputField/InputField"
import Picker from "../Picker/Picker"
import PrimaryText from "../PrimaryText/PrimaryText"
import VStack from "../VStack/VStack"
import { TextBoxProps } from "./TextBox.types"

const TextBox = ({ inputRows, setValues, forceTheme, alignInputRight, sheet }: TextBoxProps) => {
    return (
        <Box sheet={sheet} forceTheme={forceTheme}>
            {inputRows.map((row, index) => {
                return (
                    <VStack key={row.name + index}>
                        {index > 0 && <Divider thickness={row.divider} />}
                        <HStack style={styles.spacedHStack}>
                            <View style={styles.contentContainer}>
                                <HStack>
                                    <Icon
                                        name={row.icon}
                                        size={24}
                                        rotation={row.icon === "arrow" ? 45 : 0}
                                        forceTheme={forceTheme}
                                    />
                                    <PrimaryText forceTheme={forceTheme}>{row.name}</PrimaryText>
                                </HStack>
                            </View>
                            {row.picker ? (
                                <View style={styles.pickerContainer}>
                                    <Picker
                                        placeholderText={row.placeholderText}
                                        value={row.value as pickerType}
                                        setValue={(text) =>
                                            setValues &&
                                            setValues((prevRows) => [
                                                ...prevRows.slice(0, index),
                                                text,
                                                ...prevRows.slice(index + 1),
                                            ])
                                        }
                                        options={row.picker}
                                        sheet={sheet}
                                        forceTheme={forceTheme}
                                    />
                                </View>
                            ) : (
                                <View
                                    style={[
                                        styles.inputContainer,
                                        { alignItems: alignInputRight ? "flex-end" : "flex-start" },
                                    ]}
                                >
                                    <HStack>
                                        <InputField
                                            value={row.value as string}
                                            editable={row.editable}
                                            setValue={(text) =>
                                                setValues &&
                                                setValues((prevRows) => [
                                                    ...prevRows.slice(0, index),
                                                    text,
                                                    ...prevRows.slice(index + 1),
                                                ])
                                            }
                                            keyboardType={row.keyboardType}
                                            placeholderText={row.placeholderText}
                                            maxLength={row.maxLength}
                                            endText={!!row.endText}
                                            forceTheme={forceTheme}
                                            hideText={row.hideText}
                                            alignRight={alignInputRight}
                                        />
                                        {row.endText && <PrimaryText>{row.endText}</PrimaryText>}
                                    </HStack>
                                </View>
                            )}
                        </HStack>
                    </VStack>
                )
            })}
        </Box>
    )
}

export default TextBox

const styles = StyleSheet.create({
    spacedHStack: {
        justifyContent: "space-between",
    },
    contentContainer: {
        height: 40,
        marginLeft: 15,
        justifyContent: "center",
    },
    pickerContainer: {
        marginBottom: -15,
    },
    inputContainer: {
        height: 40,
        width: "48%",
        marginRight: 15,
        justifyContent: "center",
        overflow: "scroll",
    },
})
