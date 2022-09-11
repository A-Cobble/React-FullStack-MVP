import React from 'react'
import Newbug from './Newbug'

const Leftbar = ({reporter, projects, bugs, setNewBug, selectProj}) => {
  let proj=[];
  for(let i =0; i < bugs.length; i++){
    (!proj.includes(bugs[i].project) && proj.push(bugs[i].project))
  }
  // console.log(proj)

  return (
    <div>
      <div>
        <Newbug setNewBug={setNewBug} />
      </div>
      <div>List of All Projects</div>
      <div className='project_list'>  
        {proj.map((b) =>
          <div className = 'project_name' type='button' key={b} onClick={()=> selectProj(b)}>{b}</div>
        )}
      </div>
    </div>
  )
}

export default Leftbar

//* <ol class="list-group list-group-numbered">
  //<li class="list-group-item d-flex justify-content-between align-items-start">
   // <div class="ms-2 me-auto">
      //<div class="fw-bold">Subheading</div>
    //  Content for list item
   // </div>
    //<span class="badge bg-primary rounded-pill">14</span>