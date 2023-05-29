import styled from "styled-components"
import { StyledColorProps } from "../../types/primitivTypes"
import { darkColors, lightColors } from "../../utils/theming/colors"
import { getTheme } from "../../utils/theming/getTheme"
import HStack from "../HStack"
import { ExtendableTextBoxControlButton } from "./ExtendableTextBoxControlButton"
import { ExtendableTextBoxControlsProps } from "./ExtendableTextBoxControls.types"

export const ExtendableTextBoxControls = ({
    minRowCount,
    maxRowCount,
    rowCount,
    setRowCount,
    forceTheme,
}: ExtendableTextBoxControlsProps) => {
    return (
        <HStack>
            <ControlsContainer color={getTheme(forceTheme, darkColors.SystemGray4, lightColors.SystemGray5)}>
                <ExtendableTextBoxControlButton
                    icon="minus-salmon"
                    onPress={() => setRowCount((prev: any) => prev - 1)}
                    disabled={rowCount <= minRowCount}
                    forceTheme={forceTheme}
                />
                <ExtendableTextBoxControlButton
                    icon="add-salmon"
                    onPress={() => setRowCount((prev: any) => prev + 1)}
                    disabled={rowCount >= maxRowCount}
                    forceTheme={forceTheme}
                />
            </ControlsContainer>
        </HStack>
    )
}

const ControlsContainer = styled(HStack)<StyledColorProps>`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background: ${({ color }) => color};
`
