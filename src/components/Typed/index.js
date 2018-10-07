import React from 'react'


const TO_END = 'TO_END'
const TO_START = 'TO_START'

const textArr = [
  'Web разработку',
  // 'Разработку мобильных приложений',
];

class Typed extends React.Component { 
  
  constructor(props) {
    super(props);
    this.state = {
      typedText: '',
      direction: TO_END,
    }
  }

  componentDidMount() {
    this.runTypeWriter();
  }

  runTypeWriter = () => {
    const { typedText, direction } = this.state;
    // console.log('>>> textArr item: ', { txt });

    const txt = textArr[0];
    let i = 0     

    const typeWriter = () => {
      if (i < txt.length) {
        this.setState(prevState => ({
          ...prevState,
          typedText: prevState.typedText + txt.charAt(i),
        }), () => {
          i++;
          if (i === txt.length) {
            typeRemover();
          } else {
            setTimeout(typeWriter, 300);
          }
        });
      }
    }

    const typeRemover = () => {
      if (i >= 0) {
        this.setState(prevState => ({
          ...prevState,
          typedText: prevState.typedText.substring(0, i),
        }), () => {
          i--;
          setTimeout(typeRemover, 300);
        });
      }
    }

    // run loop script
    typeWriter()
  }

  render() {
    const { typedText } = this.state;
    const { fontSize, fontColor } = this.props;
    return (
      <div>
        <div className="typed">ItKartell обеспечивает<br />- {typedText}</div>
        <style jsx>{`
          .typed {
            font-family: 'Roboto Condenced', sans-serif;
            font-size: ${fontSize || 12}px;
            color: ${fontColor || 'white'};
          }
        `}</style>
      </div>
    )
  }
}

export default Typed

