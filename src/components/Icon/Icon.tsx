import { Image } from "react-native"
import styled from "styled-components"
import { useIcons } from "../../utils/icons/useIcons"
import { IconProps, StyledImageProps } from "./Icon.types"

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
