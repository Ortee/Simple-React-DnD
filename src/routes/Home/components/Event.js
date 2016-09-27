import React from 'react'

export default class Event extends React.Component {
  constructor(props){
    super(props);
    this.onDragStart = this.onDragStart.bind(this);
  }

  onDragStart(ev){
    ev.dataTransfer.setData("draggedEvent", this.props.description);
  }

  render() {
    let topMargin;
    let event = {
      current: "",
      hours: this.props.hours,
      description: [ "08:00 - 09:00", "09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00" ],
      topMargin : [ 0, 131, 262, 393, 524 ]
    }
    event.description.map(function(item, index) {
      if(event.hours === item) {
        event.current = event.topMargin[index];
      }
    })
    return(
            <div  onDragStart={this.onDragStart.bind(this)}
                  className="event q4 past"
                  draggable="true"
                  style={{top: event.current+'px'}}>
              <p className="hours">{this.props.hours}</p>
              <p className="description">{this.props.description}</p>
              <span className="icon"></span>
            </div>

    );
  }
};
