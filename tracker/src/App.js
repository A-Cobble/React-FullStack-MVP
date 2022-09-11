import React, { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Leftbar from './components/Leftbar'
import LogInOut from './components/LogInOut'
import Mainbody from './components/Mainbody'


const App = () => {
  const [bugs, setBugs] = useState([]);
  const [projects, setProjects] = useState([]);
  // const [reporter, setReporter] = useState("");
  const [selectedBug, setSelectedBug] = useState({})
  // const [toggle, setToggle] = useState(false);
  const [searchProjects, setSearchProjects] = useState([])
  const [updateBug, setUpdateBug] = useState('text')


  // console.log(projects)
  useEffect(() => {
    //Get all data in tracker table
    fetch('http://localhost:4000/api/bugs')
      .then((response) => response.json())
      .then((data) => setBugs(data));
  },[])

  function homeButton(){
    setBugs([])
    setProjects([])
    setSelectedBug({})

    fetch('http://localhost:4000/api/bugs')
      .then((response) => response.json())
      .then((data) => setBugs(data));
  }

  //set initial projects from seed file
  function selectProj(event){
    let projName = event
    fetch(`http://localhost:4000/api/bugs/${projName}`)
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }
  // console.log(projects)
  //search for a project by name
  function searchProj(e, event){
    event.preventDefault()
    fetch(`http://localhost:4000/api/bugs/${e}`)
    .then((response) => response.json())
    .then((data) => setProjects(data));
  }
  

  //update the description of a bug
  // function setUpdate(e){
  //   let updateDescrip = {bug_description: e}
  //   fetch(`http://localhost:4000/api/bugs/${e}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //   },
  //   mode: 'cors',
  //   body: JSON.stringify(updateDescrip),
  //   })
  //     .then((response)=> response.json())
  //     .then((data) => console.log('Success:', data));
  // }

  //select a project to see all bugs
  function setSelectedB(event){
    // setToggle(!toggle)
    setSelectedBug(event)
  }
  
  function setNewBug(newBug){
    // console.log(newBug)
    fetch('http://localhost:4000/api/bugs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
        mode: 'cors',
        body: JSON.stringify(newBug)
    })
        .then((response)=> response.json())
        .then((data) => console.log('Success:', data));

    setBugs((bugs) =>{return bugs.concat(newBug)})
  }

  function updateExistingBugs(updateBugs){
    // console.log(updateBugs)
    fetch(`http://localhost:4000/api/bugs/${updateBugs.bug_summary}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
        mode: 'cors',
        body: JSON.stringify(updateBugs)
    })
      .then(()=> fetch('http://localhost:4000/api/bugs')
      .then((response) => response.json())
      .then((data) => setBugs(data))
    )
  }
  
  return (
    <div className='page-color'>
      <LogInOut 
        bugs={bugs} 
        resetBugs={homeButton} 
        searchProj={searchProj}
        projects={projects}/>
      <div className='container'>
        <div className='leftBar'>
          <Leftbar 
            // reporter={reporter}
            selectProj={selectProj}
            projects={projects}
            setNewBug={setNewBug}
            bugs={bugs}
          />
        </div>
        <div className='body'>
          <Mainbody 
            projects={projects}
            setUpdateExistingBug={updateExistingBugs}
            // toggle={toggle}
            bugs={bugs}
            setSelectedB={setSelectedB}
            selectedBug={selectedBug}
            // setUpdateDesc={setUpdate}
          />
        </div>
        </div>
      <Footer />

    </div>
  )
}

export default App