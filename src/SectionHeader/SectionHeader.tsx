import React from 'react'
import './SectionHeader.css'

const SectionHeader = ({title, aboveTitle, belowTitle}: SectionHeaderProps) => {
  return (
    <div className='header-2-align'>
       <p className='paragraph'>{aboveTitle}</p>
        <h2 className='header-2'>{title}</h2>
        <p className='paragraph'>{belowTitle}</p>
    </div>
  )
}

export default SectionHeader
