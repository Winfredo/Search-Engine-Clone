import React from 'react'

const Footer = ({dark}) => {
  return (
    <div className={`footer-container ${dark ? 'footer-dark' : 'light'}`}>
      <h1>2025 &copy; Google Clone</h1>
    </div>
  )
}

export default Footer
