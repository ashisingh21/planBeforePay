import React, { useEffect, useState } from 'react'

const useWindowSize = () => {

    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => {

        const resize = () => {
            setSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', resize)

        return () => window.removeEventListener('resize', resize)

    }, [])

    return {
        width: size[0],
        height: size[1]
    }
}

export default useWindowSize