import React, { useState } from 'react'

const Newbug = ({ setNewBug }) => {
    
    let [proj, setProj] = useState('')
    let [bug_sum, setBugSum] = useState('')
    let [bug_des, setBugDes] = useState('')
    let [pri, setPri] = useState('')
    let [stat, setStat] = useState('')
    let [rep, setRep] = useState('')
    let [comp, setComp] = useState(false)


    const changeProject =(e) => {
        console.log(e.target.value)
        setProj(e.target.value)
    }
    const changeSummary =(e) => {
        console.log(e.target.value)
        setBugSum(e.target.value)
    }
    const changeDescription =(e) => {
        console.log(e.target.value)
        setBugDes(e.target.value)
    }
    const changePriority =(e) => {
        console.log(e.target.value)
        setPri(e.target.value)
    }
    const changeStatus =(e) => {
        setStat(e.target.value)
        console.log(e.target.value === 'Resolved')
        changeCompleted(e.target.value)
    }
    const changeReporter =(e) => {
        console.log(e.target.value)
        setRep(e.target.value)
    }
    const changeCompleted =(s) => {
        if(s === 'Resolved'){
            setComp(true)
        }else{ 
            setComp(false)
        }
    }
    let createBug = {
        project:proj,
        bug_summary:bug_sum,
        bug_description:bug_des,
        priority:pri,
        status:stat,
        reporter:rep,
        completed:comp
    }

  return (
    <div className='buttonDiv'>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        New Bug Report
        </button>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Add a Bug Report</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder='Your Name' onChange={changeReporter}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputUniqueID" className="form-label">Bug Identification Code</label>
                    <input type="text" className="form-control" id="inputUniqueID" placeholder='Enter a Unique ID' onChange={changeSummary}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputProject" className="form-label" placeholder='Project Name'>Project</label>
                    <input type="text" className="form-control" id="inputProject" placeholder="Ex: React-MVP" onChange={changeProject}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputPriority" className="form-label">Priority Level</label>
                    <select id="inputPriority" className="form-select" onChange={changePriority}>
                    <option value>Choose...</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputStatus" className="form-label">Status</label>
                    <select id="inputStatus" className="form-select" onChange={changeStatus}>
                    <option value>Choose...</option>
                    <option>Initial Report</option>
                    <option>In Progress</option>
                    <option>In Review</option>
                    <option>Resolved</option>
                    </select>
                </div>
                <div className="col-12 form-floating">
                    <textarea className="form-control" placeholder="Add information about the Bug here." id="bugDescription" style={{height: 100 + "px"}} onChange={changeDescription}></textarea>
                    <label htmlFor="bugDescription">Add information about the Bug here.</label>
                </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={()=> setNewBug(createBug) }>Submit</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Newbug


//figure out how to implement this button

