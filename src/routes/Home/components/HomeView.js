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
            <Hour time="08:00"/>
            <Hour time="09:00"/>
            <Hour time="10:00"/>
            <Hour time="11:00"/>
            <Hour time="12:00"/>
            <Hour time="13:00"/>
            <Hour time="14:00"/>
            <Hour time="15:00"/>
            <Hour time="16:00"/>
            <Hour time="17:00"/>
            <Hour time="18:00"/>
            <Hour time="19:00"/>
            <Hour time="20:00"/>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default HomeView
