import {createContext, useContext, useState} from 'react';
import { useEffect } from 'react';

export const Todocontext = createContext([]);


export default function Todocontexts({children}){
    
const [tasks, setTasks] = useState([]);

// initialize data
useEffect(
    ()=>{
        // check the local storage for the tasks
        const task = localStorage.getItem('tasks')
        if(task){

            // if exist add to the state
            setTasks(JSON.parse(task))
        }
    },[]
)
return(
        <>
            <Todocontext.Provider value={{tasks, setTasks}}>
            {
                children
            }
            </Todocontext.Provider>

        </>
    )
}

export const useTask = () => useContext(Todocontext)