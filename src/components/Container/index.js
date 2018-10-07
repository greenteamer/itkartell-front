import React from 'react'


export default ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        max-width: 1140px;
        margin: 0 auto;
      }
    `}</style>
  </div>
)