import React from 'react'

const BugList = ({ projects, bugs, setSelectedB }) => {
    let selected=[]
    if(projects.length === 0){
        selected = bugs
    }else{
        selected= projects
    } 

    // console.log(selected, bugs)

    return (
        <div className='styling-for-buglist'>
            <div className='shadow p-3 mb-5 bg-body rounded'>Bug List
                <div className='bug-container'>
                    {selected.map((b) => {
                        return(
                            <div className='summary-priority-container' key={b.id}>
                                <ul className="list-group list-group-flush">
                                    <li type="button" className="list-group-item" onClick={() => setSelectedB(b)}>{b.bug_summary}</li>
                                </ul>
                                <ul className="list-group list-group-flush">
                                    <li type="text" className="list-group-item" >{b.priority}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BugList

