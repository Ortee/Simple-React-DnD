import React from 'react'

export default class Event extends React.Component {
  constructor(props){
    super(props);
    this.onDragStart = this.onDragStart.bind(this);
  }

  onDragStart(ev){
    ev.dataTransfer.setData("draggedEvent", JSON.stringify(this.props));
  }

  render() {
    let topMargin;
    if(this.props.hours === "08:00 - 09:00") {
      topMargin = 0;
    } else if(this.props.hours === "09:00 - 10:00") {
      topMargin = 131;
    } else if(this.props.hours === "10:00 - 11:00") {
      topMargin = 262;
    } else if(this.props.hours === "11:00 - 12:00") {
      topMargin = 393;
    } else if(this.props.hours === "12:00 - 13:00") {
      topMargin = 524;
    }
    return(
            <div  onDragStart={this.onDragStart.bind(this)}
                  className="event q4 past"
                  draggable="true"
                  style={{top: topMargin+'px'}}>
              <p className="hours">{this.props.hours}</p>
              <p className="description">{this.props.description}</p>
              <span className="icon"></span>
            </div>

    );
  }
};
