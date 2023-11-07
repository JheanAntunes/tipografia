import { useState } from 'react'
function useToggle(initialState?: boolean) {
    const [toggle, setToggle] = useState(initialState ?? false)
    return {
        toggle,
        setToggle,
    }
}

export default useToggle
