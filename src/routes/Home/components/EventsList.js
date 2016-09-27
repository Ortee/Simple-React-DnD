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


  handleEvenet(id, event, pageY){
    let arr = this.state.data;
    let hour;
    console.log("pageY",pageY);
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
      if(eve.description === event.description) {
        arr[index].dataDay = id;
        arr[index].hours = hour;
        EVENTS_DATA = arr;
      }
    });
    this.forceUpdate();
  }
  render() {
    let day1 = [];
    let day2 = [];
    let day3 = [];
    let day4 = [];
    let day5 = [];
    let day6 = [];
    let day7 = [];
    this.state.data.forEach(function(event, index) {
      let eventHTML = <Event key={index} hours={event.hours} description={event.description}/>;
      if(event.dataDay === "1") {
        day1.push(eventHTML);
      } else   if(event.dataDay === "2") {
          day2.push(eventHTML);
      } else   if(event.dataDay === "3") {
          day3.push(eventHTML);
      } else   if(event.dataDay === "4") {
          day4.push(eventHTML);
      } else   if(event.dataDay === "5") {
          day5.push(eventHTML);
      } else   if(event.dataDay === "6") {
          day6.push(eventHTML);
      } else   if(event.dataDay === "7") {
          day7.push(eventHTML);
      }
    });
    let eventOnDrop = this.handleEvenet.bind(this)
    return(
      <div className="events">
        {[day1, day2, day3, day4, day5, day6, day7].map(function(item, index){
            return <Day key={index} dataDay={(index+1).toString()} content={item} onEventDrop={eventOnDrop} />
        })}
      </div>
    );
  }

};
