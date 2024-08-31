import React from 'react'
import './SectionHeader.css'

const SectionHeader = ({title, aboveTitle, belowTitle}: SectionHeaderProps) => {
  return (
    <hgroup className='header-2-align'>
       <span className='paragraph'>{aboveTitle}</span>
        <h2 className='header-2 uppercase'>{title}</h2>
        <span className='paragraph'>{belowTitle}</span>
    </hgroup>
  )
}

export default SectionHeader
