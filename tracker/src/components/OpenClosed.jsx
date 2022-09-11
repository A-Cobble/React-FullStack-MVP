import React from 'react'

const OpenClosed = ({  projects, bugs }) => {
  let selected = []
  let open = 0
  let closed = 0
    if(projects.length === 0){
        selected= bugs
    }else{
        selected = projects
    } 
    selected.map((b) => {
      if(b.status === 'Resolved'){
        closed++
        return closed;
      }else {
        open++;
        return open;
      }
    })
    // console.log(selected)
  return (
    <div className='empty'>
      <div className='shadow p-3 mb-5 bg-body rounded'>Bug Status
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Open
          <span className="badge bg-primary rounded-pill">{open}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center"> 
            Closed
            <span className="badge bg-primary rounded-pill">{closed}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OpenClosed

