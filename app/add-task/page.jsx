
import React from 'react';
import AddTaskForm from './AddTaskForm';

export const metadata = {
    title: "Add-Task : Project"
};

const AddTask = () => {
   
    return (
        <div className='grid grid-cols-12 justify-center'>
            <div className='col-span-6 col-start-4 p-5'>
                <h1 className='text-3xl'>Add Task Component</h1>
               <AddTaskForm/>
            </div>
        </div>
    );
};

export default AddTask;
