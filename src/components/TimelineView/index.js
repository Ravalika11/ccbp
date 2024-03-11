import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="app-container">
      <h1 className="heading">
        MY JOURNEY OF <br />
        <span className="ccbp-title"> CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            primary: '#0967d2',
            secondary: '#ffffff',
            titleColor: '#0967d2',
          }}
        >
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard
                  courseDetails={eachItem}
                  key={eachItem.id}
                />
              )
            }
            return (
              <ProjectTimelineCard
                projectDetails={eachItem}
                key={eachItem.id}
              />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
