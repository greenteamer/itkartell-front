import React from 'react'
import PreText from '../PreText'


const Tag = ({ tagType, ...props }) => {
  switch (tagType) {
    case "h1":
      return <h1 {...props} />
  
    case "h2":
      return <h2 {...props} />

    case "h3":
      return <h3 {...props} />

    default:
      return <h1 {...props} />
  }
}

export default ({ text, tag, preText, centered }) => { 
  return (
    <div className="wrapper">
      <PreText lineType={centered ? 'underline' : null} preText={preText} />
      <Tag tagType={tag} style={{ marginTop: 0 }} >{text}</Tag>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: ${centered ? 'center' : 'flex-start'};
        }
      `}</style>
    </div>
  )
}