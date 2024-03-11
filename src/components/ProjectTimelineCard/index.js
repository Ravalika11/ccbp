import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails
  return (
    <div className="project-container">
      <img src={imageUrl} className="project-img" alt="project" />
      <div className="container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar className="calender-icon" />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a className="visit-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
