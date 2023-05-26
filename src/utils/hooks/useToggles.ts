import { useCallback, useState } from "react"
import { ToggleRow } from "../../types/inputRowTypes"

interface useTogglesReturnProps {
    isEnabled: boolean[]
    toggleSwitch: any
}

export function useToggles(inputRows: ToggleRow[]): useTogglesReturnProps {
    const [isEnabled, setIsEnabled] = useState(inputRows.map((row: ToggleRow) => !!row.default))
    const toggleSwitch = useCallback((index: number) => {
        setIsEnabled((prevIsEnabled: boolean[]) => {
            const newIsEnabled = [...prevIsEnabled]
            newIsEnabled[index] = !newIsEnabled[index]
            return newIsEnabled
        })
    }, [])

    return { isEnabled, toggleSwitch }
}
