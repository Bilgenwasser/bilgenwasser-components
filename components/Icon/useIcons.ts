import { ImageSourcePropType, useColorScheme } from "react-native"
import { ThemeType } from "../../shared/primitivTypes"
import { iconsDark } from "./iconsDark"
import { iconsLight } from "./iconsLight"
import { IconType } from "./IconType"

export const useIcons = (forceTheme: ThemeType): { [key in IconType]: ImageSourcePropType } => {
    const appearance = useColorScheme()

    if (forceTheme) {
        return forceTheme === "dark" ? iconsDark : iconsLight
    } else {
        return appearance === "dark" ? iconsDark : iconsLight
    }
}
