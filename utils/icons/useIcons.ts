import { ImageSourcePropType, useColorScheme } from "react-native"
import iconType from "../../components/Icon/IconType"
import { themeType } from "../../types/primitivTypes"
import { iconsDark } from "./iconsDark"
import { iconsLight } from "./iconsLight"

export const useIcons = (forceTheme: themeType): { [key in iconType]: ImageSourcePropType } => {
    const appearance = useColorScheme()

    if (forceTheme) {
        return forceTheme === "dark" ? iconsDark : iconsLight
    } else {
        return appearance === "dark" ? iconsDark : iconsLight
    }
}
