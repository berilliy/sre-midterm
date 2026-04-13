import React, { useEffect, useState } from 'react'

export default function ChartPageButtons(props) {
  const { setDataChart, pageChart, setPageChart } = props
  const [ addButton, setAddButton ] = useState(false)
  const [ removeButton, setRemoveButton ] = useState(true)

  useEffect(() => {

    if (Number(pageChart) === 4) {
        setAddButton(true)
    } else {
        setAddButton(false)
    }

    if (Number(pageChart) === 1) {
        setRemoveButton(true)
    } else {
        setRemoveButton(false)
    }
  }, [pageChart])
  return (
    <div className='chartPageButtons'>
        <button disabled={removeButton} onClick={() => {const a = Number(pageChart); setPageChart(a - 1); setDataChart('')}}>
            <i className="fa-solid fa-circle-left"></i>
        </button>
        <p>{pageChart}</p>
        <button disabled={addButton} onClick={() => {const a = Number(pageChart); setPageChart(a + 1); setDataChart('')}}>
            <i className="fa-solid fa-circle-right"></i>
        </button>
    </div>
  )
}
