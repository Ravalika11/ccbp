import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div className="course-container">
      <div className="container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="course-duration-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="tags-list-container">
        {tagsList.map(eachItem => (
          <li className="list-item" key={eachItem.id}>
            <p className="name">{eachItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
