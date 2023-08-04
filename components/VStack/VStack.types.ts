import { ReactNode } from "react"
import { StyleProp } from "react-native"

export interface VStackProps {
    children: ReactNode | ReactNode[]
    style?: StyleProp<any>
}
