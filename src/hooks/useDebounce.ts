import { useRef } from "react"

export function useDebounce(fn: Function, delay: number): Function {
    const timeout = useRef() as any

    function debounced(...args: any[]) {
        window.clearTimeout(timeout.current)
        timeout.current = window.setTimeout(() => {
            fn(...args)
        }, delay)
    }

    return debounced
}