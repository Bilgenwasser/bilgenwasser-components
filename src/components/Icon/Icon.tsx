import { Image } from "react-native"
import styled from "styled-components"
import { iconType } from "../../types/iconType"
import { ThemeProps } from "../../types/primitivTypes"
import { useIcons } from "../../utils/icons/useIcons"

interface IconProps extends ThemeProps {
    name: iconType
    size?: number
    rotation?: number
}

interface StyledImageProps {
    size?: number
    rotation?: number
}

const Icon = ({ name, size, rotation, forceTheme }: IconProps) => {
    const icons = useIcons(forceTheme)

    return <StyledImage source={icons[name]} size={size ? size : 24} rotation={rotation ? rotation : 0} />
}

export default Icon

const StyledImage = styled(Image)<StyledImageProps>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    transform: rotate(${({ rotation }) => rotation}deg);
`
