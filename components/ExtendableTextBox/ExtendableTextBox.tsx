import { useEffect, useRef, useState } from "react"
import { ExtendableRowStateType } from "../../types/ExtendableTextBoxTypes"
import { ExtendableTextBoxProps } from "./ExtendableTextBox.types"
import { ExtendableTextBoxControls } from "./ExtendableTextBoxControls"
import { ExtendableTextBoxRow } from "./ExtendableTextBoxRow"
import Box from "../Box/Box"
import HStack from "../Stacks/HStack"
import VStack from "../Stacks/VStack"

const ExtendableTextBox = ({
    defaultRowCount,
    minRowCount,
    maxRowCount,
    icon,
    placeholderText1,
    placeholderText2,
    pickerItems,
    setValues,
    forceTheme,
}: ExtendableTextBoxProps) => {
    const [rowCount, setRowCount] = useState<number>(defaultRowCount)
    const [rowStates, setRowStates] = useState<ExtendableRowStateType[]>(
        Array(rowCount).fill({ text1: null, text2: null })
    )
    const prevRowCount = useRef(rowCount)

    useEffect(() => {
        setValues && setValues(rowStates)
    }, [rowStates])

    useEffect(() => {
        if (rowCount > prevRowCount.current) {
            setRowStates([...rowStates, { text1: null, text2: null }])
        } else if (rowCount < prevRowCount.current) {
            setRowStates(rowStates.slice(0, -1))
        }
        prevRowCount.current = rowCount
    }, [rowCount])

    return (
        <Box forceTheme={forceTheme}>
            <VStack>
                {rowStates.map((row, index) => (
                    <HStack key={index}>
                        <ExtendableTextBoxRow
                            forceTheme={forceTheme}
                            icon={icon}
                            placeholderText1={placeholderText1}
                            placeholderText2={placeholderText2}
                            setValue={(data) =>
                                setRowStates((prevRows) => [
                                    ...prevRows.slice(0, index),
                                    { text1: data.text1, text2: data.text2 },
                                    ...prevRows.slice(index + 1),
                                ])
                            }
                            pickerItems={pickerItems}
                        />
                    </HStack>
                ))}
                <ExtendableTextBoxControls
                    minRowCount={minRowCount}
                    maxRowCount={maxRowCount}
                    rowCount={rowCount}
                    setRowCount={setRowCount}
                    forceTheme={forceTheme}
                />
            </VStack>
        </Box>
    )
}

export default ExtendableTextBox
