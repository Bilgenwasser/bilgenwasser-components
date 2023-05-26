import { useColorScheme } from "react-native"
import { themeType } from "../../types/primitivTypes"

export function getTheme(forceTheme: themeType, colorsDark: string, colorsLight: string): string {
    const appearance = useColorScheme()

    if (forceTheme) {
        return forceTheme === "dark" ? colorsDark : colorsLight
    } else {
        return appearance === "dark" ? colorsDark : colorsLight
    }
}
