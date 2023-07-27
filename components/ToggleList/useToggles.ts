import { useCallback, useState } from "react"
import { ToggleRowProps } from "./ToggleRowProps"

interface useTogglesReturnProps {
    isEnabled: boolean[]
    toggleSwitch: any
}

export function useToggles(inputRows: ToggleRowProps[]): useTogglesReturnProps {
    const [isEnabled, setIsEnabled] = useState(inputRows.map((row: ToggleRowProps) => !!row.default))
    const toggleSwitch = useCallback((index: number) => {
        setIsEnabled((prevIsEnabled: boolean[]) => {
            const newIsEnabled = [...prevIsEnabled]
            newIsEnabled[index] = !newIsEnabled[index]
            return newIsEnabled
        })
    }, [])

    return { isEnabled, toggleSwitch }
}
