import React from 'react'
import Event from './Event'
import Day from './Day'
import './HomeView.scss'

var EVENTS_DATA = [
  {
    dataDay:"1",
    hours:"08:00 - 09:00",
    description:"Meier"
  },
  {
    dataDay:"5",
    hours:"10:00 - 11:00",
    description:"Event2"
  }
];

export default class EventsList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data : EVENTS_DATA
    };
    this.handleEvenet = this.handleEvenet.bind(this);
  }


  handleEvenet(id, description, pageY){
    let arr = this.state.data;
    let hour;
    if(pageY > 730) {
      hour = "12:00 - 13:00";
    } else if(pageY > 600){
      hour = "11:00 - 12:00";
    } else if(pageY > 470){
      hour = "10:00 - 11:00";
    } else if(pageY > 335){
      hour = "09:00 - 10:00";
    } else if(pageY <= 335){
      hour = "08:00 - 09:00";
    }
    arr.forEach(function(eve, index) {
      if(eve.description === description) {
        arr[index].dataDay = id;
        arr[index].hours = hour;
        EVENTS_DATA = arr;
      }
    });
    this.forceUpdate();
  }
  render() {
    let days = { 1 : [],2: [],3: [],4: [],5: [],6: [],7: []};
    this.state.data.forEach(function(event, index) {
      let eventHTML = <Event key={index} hours={event.hours} description={event.description}/>;
      for(var i=1; i <= 7; i++) {
        if(event.dataDay === i.toString()) {
          days[i].push(eventHTML);
        }
      }
    });
    let eventOnDrop = this.handleEvenet.bind(this)
    return(
      <div className="events">
        {[days[1], days[2], days[3], days[4], days[5], days[6], days[7]].map(function(item, index){
            return <Day key={index} dataDay={(index+1).toString()} content={item} onEventDrop={eventOnDrop} />
        })}
      </div>
    );
  }

};
