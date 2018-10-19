import React from 'react'


const TO_END = 'TO_END'
const TO_START = 'TO_START'

const textArr = [
  'Web разработку',
  'Разработку мобильных приложений',
];

class Typed extends React.Component { 
  
  constructor(props) {
    super(props);
    this.state = {
      typedText: '',
      direction: TO_END,
      hidden: false,
    }
  }

  componentDidMount() {
    this.runTypeWriter();
    this.startBlinkCursor();
  }

  startBlinkCursor = () => {
    this.setState(prevState => ({
      ...prevState,
      hidden: !prevState.hidden,
    }), () => {
      setTimeout(this.startBlinkCursor, 500);
    })
  }

  randomizer = () => {
    return 250 - Math.floor(Math.random() * 200);
  }

  typeWriter = (textArr, index, i) => {
    const txt = textArr[index];

    if (i < txt.length) {
      this.setState(prevState => ({
        ...prevState,
        typedText: prevState.typedText + txt.charAt(i),
      }), () => {
        i++;
        if (i === txt.length) {
          setTimeout(() => this.typeRemover(textArr, index, i), 2000);
        } else {
          setTimeout(() => this.typeWriter(textArr, index, i), this.randomizer());
        }
      });
    }
  }

  typeRemover = (textArr, index, i) => {
    const removeChr = prevState => ({
      ...prevState,
      typedText: prevState.typedText.substring(0, i),
    })
    if (i >= 0) {
      this.setState(removeChr, () => {
        i--;
        // setTimeout(() => this.typeRemover(i), 20);
        if (i === 0) {
          this.setState(removeChr, () => {
            // typeWriter();
            if (textArr[index + 1]) {
              setTimeout(() => this.typeWriter(textArr, index + 1, i), this.randomizer());
            } else {
              setTimeout(() => this.typeWriter(textArr, 0, i), this.randomizer());
            }
          })
        } else {
          // setTimeout(typeRemover, 100);
          setTimeout(() => this.typeRemover(textArr, index, i), 20);
        }
      });
    }
  }

  runTypeWriter = () => {
    const { typedText, direction } = this.state;
    let i = 0     
    // run loop script
    this.typeWriter(textArr, 0, i)
  }

  render() {
    const { typedText, hidden } = this.state;
    const { fontSize, fontColor } = this.props;
    return (
      <div>
        <div className="typed">ItKartell обеспечивает<br />- {typedText} <span className={`cursor ${hidden && 'hidden'}`}>|</span></div>
        <style jsx>{`
          .typed {
            font-family: "Muller-ExtraBold";
            font-size: ${fontSize || 12}px;
            color: ${fontColor || 'white'};
          }
          .cursor {
            opacity: 1;
            font-weight: 600;
            margin-left: -7px;
          }
          .hidden {
            opacity: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default Typed

