import React from 'react'


const Card = ({ icon, title, text }) => { 
  return (
    <div className="container">
      <div>{icon}</div>
      <div>{title}</div>
      <div>{text}</div>
      <style jsx>{`
        .container {
          background: white;
          box-shadow: 0px 5px 35px 0px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  )
}

export default Typed

