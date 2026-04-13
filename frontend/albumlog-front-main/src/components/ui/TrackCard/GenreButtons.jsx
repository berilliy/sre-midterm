import React, { Children, useEffect, useState } from 'react'

export default function GenreButtons(props) {
    const { setPageChart, genreChart, setDataChart, setGenreChart, children } = props;
    const [isPressed, setIsPressed] = useState(false);
    useEffect(() => {
        setIsPressed(false)
        setPageChart('1')
    }, [genreChart])
    return (
        <button className="genreChangeBtn" disabled={isPressed} onClick={() => {setDataChart(''); setGenreChart(`${children}`); setTimeout(() => {setIsPressed(true)}, 10)}}>
            {children}
        </button>
  )
}
