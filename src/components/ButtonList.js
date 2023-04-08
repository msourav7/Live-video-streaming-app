import React from 'react'
import Button from './Button'

// const list=  ['All','Gaming','Songs',]

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name='All'/>
      <Button name='Gaming'/>
      <Button name='Songs'/>
      <Button name='Live'/>
      <Button name='Soccer'/>
      <Button name='Cricket'/>
      <Button name='All'/>
      <Button name='Gaming'/>
      <Button name='Songs'/>
      <Button name='Live'/>
      <Button name='Soccer'/>
      <Button name='Cricket'/>
    </div>
  )
}

export default ButtonList