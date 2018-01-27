// import React, { Component } from 'react';
// import './MemoryCard.css';
//
// class MemoryCard extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state={isFlipped:false};
//     }
//
//     clickHandler() {
//         this.setState({ isFlipped:!this.state.isFlipped });
//     }
//
//     render() {
//         var memoryCardInnerClass = "MemoryCardInner";
//
//         if (this.props.isFlipped == true) {
//             memoryCardInnerClass += " flipped"
//         }
//
//         return (
//             <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
//                 <div className={memoryCardInnerClass}>
//                     <div className="MemoryCardBack">
//                         <img className="logo" src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" />
//                     </div>
//                     <div className="MemoryCardFront">
//                         {this.props.symbol}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default MemoryCard;
//
//
//



import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
  
  render() {
      var cardClass = "MemoryCardInner";
      if (this.props.isFlipped) {
          cardClass += " flipped";
      }
    return (
        <div className="MemoryCard" onClick={this.props.pickCard}>
            <div className={cardClass}>
                <div className="MemoryCardBack">
                      <img src="" />
                </div>
                <div className="MemoryCardFront">{this.props.symbol}</div>
            </div>
          </div>
    );
  }
}

export default MemoryCard;
