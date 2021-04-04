import React from 'react'

export const Footer = (props) => {
  const { hireRef } = props

  return (
    <footer ref={hireRef} className="footer">
      <p>© Nick Zbiegien 2021</p>
    </footer>
  )
}
