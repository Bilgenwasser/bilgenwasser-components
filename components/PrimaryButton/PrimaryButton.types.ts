export interface PrimaryButtonProps {
    children: string | string[]
    onPress?: (event: any) => void
    smallMargin?: boolean
    disabled?: boolean
}

export interface BackgroundProps {
    disabled: boolean
    smallMargin: boolean
}
