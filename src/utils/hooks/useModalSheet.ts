import { useCallback, useState } from "react"

interface useModalSheetReturnProps {
    isModalSheetVisible: boolean
    setIsModalSheetVisible: (visible: boolean) => void
    triggerSheet: any
}

export function useModalSheet(): useModalSheetReturnProps {
    const [isModalSheetVisible, setIsModalSheetVisible] = useState<boolean>(false)

    const triggerSheet = useCallback((index: number) => {
        index === -1 ? setIsModalSheetVisible(false) : setIsModalSheetVisible(true)
    }, [])

    return { isModalSheetVisible, setIsModalSheetVisible, triggerSheet }
}
