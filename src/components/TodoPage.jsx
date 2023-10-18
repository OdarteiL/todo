import { Trash } from "@phosphor-icons/react"
import { useState } from "react"


export default function TodoPage() {

    const [tasks, setTasks] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        const inputData = new FormData(e.target)
        setTasks([...tasks, inputData.get('task')]) 
        e.target.reset();
    }

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <h1>My Power List</h1>
            <hr />
            <br />

            <div className="container">
                <input type="text" name='task' placeholder='Your Task here' />
                <br />
                <button>Submit</button>
                <button>New Task</button>

            </div>
        </form>
        <div className="line-color"></div>

        <div className="data-container">
            <h2>{"Today's"} Task</h2>
            <ul>
                {
                    tasks.length > 0 ? (
                        <>
                            {
                                tasks.map(
                                    (task, idx) => {
                                        return <li key={'task' + idx} >{task}   <Trash className="delt" size={12} /></li>
                                    }
                                )
                            }
                        </>
                    ) : null
                }
            </ul>
        </div>
    </div>
  )
}
