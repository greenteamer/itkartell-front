import React from 'react'
import Button from '@material-ui/core/Button';


const Card = ({ icon, title, text }) => { 
  return (
    <div className="container">
      <div>{icon}</div>
      <div>{title}</div>
      <div>{text}</div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <style jsx>{`
        .container {
          background: white;
          box-shadow: 0px 5px 35px 0px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  )
}

export default Card

