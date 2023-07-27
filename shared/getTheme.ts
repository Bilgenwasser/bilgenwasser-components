import { useColorScheme } from "react-native"
import { ThemeType } from "./primitivTypes"

export function getTheme(forceTheme: ThemeType, colorsDark: string, colorsLight: string): string {
    const appearance = useColorScheme()

    if (forceTheme) {
        return forceTheme === "dark" ? colorsDark : colorsLight
    } else {
        return appearance === "dark" ? colorsDark : colorsLight
    }
}
