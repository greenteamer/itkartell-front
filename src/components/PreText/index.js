import React from 'react'


export default ({ lineType, preText }) => { 
  if (lineType === 'underline') {
    return (
      <div className="preTextWrapperCentered">
        <div className="preText">{preText}</div>
        <div className="line"></div>
        <style jsx>{`
          .preTextWrapperCentered {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .line {
            width: 100%;
            height: 2px;
            background: #f44438;
          }
          .preText {
            color: #999999;
            padding: 0 8px;
            font-family: "Akrobat-SemiBold";
          }
        `}</style>
      </div>
    )
  }
  return (
    <div className="preTextWrapper">
      <div className="line"></div>
      <div className="preText">{preText}</div>
      <style jsx>{`
        .preTextWrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .line {
          width: 50px;
          height: 2px;
          background: #f44438;
          margin-right: 8px;
        }
        .preText {
          color: #999999;
          font-family: "Akrobat-SemiBold";
        }
      `}</style>
    </div>
  )
}