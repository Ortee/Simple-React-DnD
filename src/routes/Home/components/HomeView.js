import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import Event from './Event'
import Hour from './Hour'
import EventsList from './EventsList'

export const HomeView = () => (
  <div>
    <div id="terminplaner">
      <div className="header">
        <h2>Terminplaner</h2>
        <div className="control">
          <span className="prev">&lt;</span>
          <span className="date">6 &mdash; 12. Juli 2015</span>
          <span className="next">&gt;</span>
        </div>
        <span className="month"></span>
        <span className="slider"></span>
      </div>
      <div className="table">
        <EventsList></EventsList>
        <table>
          <thead>
            <tr>
              <td>Uhrzeit</td>
              <td>Mo 06.07.</td>
              <td>Di 07.07.</td>
              <td>Mi 08.07.</td>
              <td>Do 09.07.</td>
              <td>Fr 10.07.</td>
              <td className="free" >Sa 11.07.</td>
              <td className="free" >So 12.07.</td>
            </tr>
          </thead>
          <tbody>
            {["08:00","09:00","10:00","11:00","12:00","13:00"
            ,"14:00","15:00","16:00","17:00","18:00","19:00",
            "20:00"].map(function(item, index){
              return <Hour key={index} time={item}/>
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default HomeView
