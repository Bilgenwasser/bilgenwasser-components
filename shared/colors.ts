type universalColorType = "Salmon" | "Blue" | "Olive" | "SystemWhite" | "SystemBlack" | "SystemGray"
type grayColorType = "SystemGray2" | "SystemGray3" | "SystemGray4" | "SystemGray5" | "SystemGray6"

export const universalColors: { [key in universalColorType]: string } = {
    Salmon: "#DA644A",
    Blue: "#3993DD",
    Olive: "#44AF69",
    SystemWhite: "#FFFFFF",
    SystemBlack: "#000000",
    SystemGray: "#8E8E93",
}

export const darkColors: { [key in grayColorType]: string } = {
    SystemGray2: "#636366",
    SystemGray3: "#48484A",
    SystemGray4: "#3A3A3C",
    SystemGray5: "#2C2C2E",
    SystemGray6: "#1C1C1E",
}

export const lightColors: { [key in grayColorType]: string } = {
    SystemGray2: "#AEAEB2",
    SystemGray3: "#C7C7CC",
    SystemGray4: "#D1D1D6",
    SystemGray5: "#E5E5EA",
    SystemGray6: "#F2F2F7",
}
