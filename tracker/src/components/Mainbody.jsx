import React from 'react'
import BugList from './BugList'
import OpenClosed from './OpenClosed'
import ProjDes from './ProjDes'

const Mainbody = ({ projects, bugs, setSelectedB, selectedBug, setUpdateDesc, setUpdateExistingBug}) => {
  return (
    <div>
      <div>
        <div className='BugList_OpenClosed'>
          <BugList 
            projects={projects}
            bugs={bugs}
            setSelectedB={setSelectedB}
          />
          <OpenClosed 
            projects={projects} 
            bugs={bugs}
          />
        </div>
        <ProjDes 
          setUpdateExistingBug={setUpdateExistingBug}
          projects={projects}
          selectedBug={selectedBug}
          bugs={bugs}
          setUpdateDesc={setUpdateDesc}
        />
      </div>
    </div>
  )
}

export default Mainbody