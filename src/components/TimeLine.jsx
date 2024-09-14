import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import '../styles/timeline.css'

const TimeLine = () => {

  const settings = {
    bgColor:'var(--color_secundario)',
    color:'var(--color_principal)',
    lineColor:'var(--color_timeline)'

  }
  const protocol = [
    {
      id:1,
      time:'18:00 Hrs.',
      name:'Ceremonia religiosa',
      icon:'church_timeline',
      color:'var(--color_timeline)',
      textColor:'rgb(218 167 88)'
    },

    {
      id:2,
      time:'19:00 Hrs.',
      name:'Recepción',
      icon:'recepcion_timeline',
      color:'var(--color_timeline)',
      textColor:'rgb(218 167 88)'
    },

    {
      id:3,
      time:'19:30 Hrs.',
      name:'C. Civil',
      icon:'rings_timeline',
      color:'var(--color_timeline)',
      textColor:'rgb(218 167 88)'
    },

    {
      id:4,
      time:'21:00 Hrs.',
      name:'Protocolo',
      icon:'drinking_timeline',
      color:'var(--color_timeline)',
      textColor:'rgb(218 167 88)'
    },
    {
      id:5,
      time:'22:00 Hrs.',
      name:'Cena',
      icon:'cutlery_timeline',
      color:'var(--color_timeline)',
      textColor:'rgb(218 167 88)'
    },
    {
      id:6,
      time:'23:00 Hrs.',
      name:'Baile',
      icon:'music_timeline',
      color:'var(--color_timeline)',
      textColor:'rgb(218 167 88)'
    },
  ]
  return (
    <div className='timeline'>
      <h3 className='timeline-title-cont'>Protocolo</h3>
      <VerticalTimeline
      lineColor={`${settings.lineColor}`}
      >
        {
          protocol.map(item=>(
            <VerticalTimelineElement
              key=
                {item.id}
              className=
                "vertical-timeline-element--work"
              contentStyle={
                { background: `${settings.bgColor}`,
                  color:`${settings.color}`,
                  marginRight:'10px' }}
              contentArrowStyle={
                { borderRight: `7px solid ${settings.bgColor}`}}
              date=
                {`${item.time}`}
              dateClassName=
                'custom-date-color'
              iconStyle={
                { background: `${settings.bgColor}`, 
                fill: `${settings.bgColor}`,
                boxShadow:`0 0 0 4px ${settings.bgColor}`}} 
              icon={
                <img src={`/img/icons/${item.icon}.svg`} 
                alt={`ico-${item.icon}`} 
                className='custom-icon'/>}
            >
            <h3 className="vertical-timeline-element-title timeline-title">{item.name}</h3>
            </VerticalTimelineElement>
          ))
        }

      </VerticalTimeline>
    </div>
  )
}

export default TimeLine