import {useState} from 'react';
import './Tasks.css';

const Tasks = () =>  {
    const [task, setTask] = useState('');
    const [taskArray, setTaskArray] = useState([]);

    const addToList = (e) => {
        e.preventDefault();
        setTaskArray([...taskArray, task]);
        setTask('');
    };

    const removeTodo = (e) => setTaskArray(taskArray.filter(task => task !== e.target.textContent));

    return (
        <section>
            {
                taskArray.length === 0 ? <h1 className={'noTasks'}>There are no tasks to display.</h1> :
                    <div className={'taskList'}>
                        {
                            taskArray.map((item, i) => {
                                return <div className={'task'}
                                            onClick={removeTodo}
                                            key={i}>{item}</div>
                            })
                        }
                    </div>
            }
            <form onSubmit={addToList}
                  className={'container'}>
                <input className={'taskInput'}
                       value={task}
                       pattern={'[a-zA-Z0-9]+.{1,}'}
                       onChange={(e) => setTask(e.target.value)}
                       placeholder={'Enter Task'}
                       required />
            </form>
        </section>
    );
};

export default Tasks;