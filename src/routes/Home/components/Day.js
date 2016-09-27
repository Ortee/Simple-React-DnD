import React from 'react'

export default class Day extends React.Component {
  constructor(props){
    super(props);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDragOver(ev){
     ev.preventDefault();
  }

  onDrop(ev){
     ev.preventDefault();
     var droppedEvent = JSON.parse(ev.dataTransfer.getData("draggedEvent"));
     this.props.onEventDrop(this.props.dataDay, droppedEvent, ev.pageY);
  }

  render() {
    return(
      <div  className="day"
        data-day={this.props.dataDay}
        onDragOver={this.onDragOver.bind(this)}
        onDrop={this.onDrop.bind(this)}>
        {this.props.content}</div>
    );
  }
};
