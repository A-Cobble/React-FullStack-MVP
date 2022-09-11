import React, { useState } from 'react'

const ProjDes = ({ projects, bugs, selectedBug, setUpdateExistingBug}) => {
  const [addToDescription, setAddToDescription] = useState('')
  const [updateCompleted, setUpdateCompleted] = useState('')
  const [updatedStatus, setUpdatedStatus] = useState('')
  const [updatedPriority, setUpdatedPriority] = useState('')

  let selected = []
    if(projects.length === 0){
        selected = bugs
    }else{
        selected = projects
    } 

  const addToDesc = (e) => {
    setAddToDescription(e.target.value)
    console.log(e.target.value)
  }
  // const updateComp = (e) => {
  //   if(e.target.value === 'on'){
  //     setUpdateCompleted(e.target.value)
  //     setUpdatedStatus('Resolved')
  //     // console.log(updatedStatus)
  //   }else{
  //     setUpdateCompleted(selectedBug.Completed)
  //   }
  // }
  // console.log(updateCompleted, 'part of the check box function')

  const updateTheStat = (e) =>{
    setUpdatedStatus(e.target.value)
    // console.log(e.target.value,'inside the updateStat function')
    if(e.target.value === 'Resolved'){
      setUpdateCompleted(true)
    }else{
      setUpdateCompleted(selectedBug.completed)
    }
  }

  const updatePri = (e) => {
    setUpdatedPriority(e.target.value)
    // console.log(e.target.value)
    }
  
  let updatedB={
    bug_summary: selectedBug.bug_summary,
    bug_description: (selectedBug.bug_description + ' ' + addToDescription),
    priority: updatedPriority,
    status: updatedStatus,
    completed: updateCompleted
  }

  return (
    <div className='ProjDes'>
      <dl className="row">
        <dt className="col-sm-3">Project</dt>
        <dd className="col-sm-9">{selectedBug.project}</dd>
        <dt className="col-sm-3">Bug Identification Code</dt>
        <dd className="col-sm-9">{selectedBug.bug_summary}</dd>

        <dt className="col-sm-3">Reporter</dt>
        <dd className="col-sm-9">{selectedBug.reporter}</dd>

        <dt className="col-sm-3">Description of the Bug</dt>
        <dd className="col-sm-9">{selectedBug.bug_description}</dd>

        <dt className="col-sm-3">Priority</dt>
        <dd className="col-sm-9">
          <div className="col-sm-2">
            <select id="update-priority" className="form-select" onChange={updatePri}>
            <option value>{selectedBug.priority}</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
            </select>
          </div>
        </dd>
        <dt className="col-sm-3">Status</dt>
        <dd className="col-sm-9">
          <div className="col-sm-2">
            <select id="update-status" className="form-select" onChange={updateTheStat}>
            <option value>{selectedBug.status}</option>
            <option>Initial Report</option>
            <option>In Progress</option>
            <option>In Review</option>
            <option>Resolved</option>
            </select>
          </div>
        </dd>
        <div className="form-floating">
          <textarea className="form-control" placeholder="Add additional information to the Bug Report here." id="floatingTextarea2" style={{height: 100 + "px"}} onChange={addToDesc}></textarea>
          <label htmlFor="floatingTextarea2">Add additional information to the Bug Report here.</label>
        </div>
        <div className='submit-update'>
          <button type='button' className="btn btn-dark" onClick={()=> setUpdateExistingBug(updatedB)} >Save Changes</button>
        </div>
      </dl>
    </div>
  )
}

export default ProjDes


//  <div className="col-12">
//<div className="form-check">
//<input className="form-check-input" type="checkbox" id="gridCheck" />
//<label className="form-check-label" htmlFor="gridCheck">
//    Bug Is Resolved
//</label>
//</div>
//</div>