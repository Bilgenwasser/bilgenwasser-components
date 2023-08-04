import { ReactNode } from "react"
import { StyleProp } from "react-native"

export interface HStackProps {
    children: ReactNode | ReactNode[]
    style?: StyleProp<any>
}
