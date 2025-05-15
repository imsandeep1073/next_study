"use client"
import React, { useState }  from 'react'

const AddTaskForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        status: 'none',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleStatusChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            status: e.target.value,
        }));
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Task Submitted:", formData);
        // You can now send formData to your API or state management
        setFormData({
            title: '',
            content: '',
            status: 'none',
        });
    };

    const handleClear = () => {
        setFormData({
            title: '',
            content: '',
            status: 'none',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='mt-5'>
                <label htmlFor="title" className='text-2xl block mb-2'>Title</label>
                <input
                    type="text"
                    id='title'
                    value={formData.title}
                    onChange={handleChange}
                    className='w-full rounded p-2 block border'
                />
            </div>
            <div className='mt-5'>
                <label htmlFor="content" className='text-2xl block mb-2'>Content</label>
                <textarea
                    id='content'
                    value={formData.content}
                    onChange={handleChange}
                    className='w-full rounded p-2 block border'
                    rows={5}
                />
            </div>
            <div className='mt-5'>
                <label htmlFor="status" className='text-2xl block mb-2'>Status</label>
                <select
                    id="status"
                    value={formData.status}
                    onChange={handleStatusChange}
                    className='w-full rounded p-2 block border'>
                    <option value="none" disabled>---Select Option---</option>
                    <option className='text-black' value="pending">Pending</option>
                    <option className='text-black' value="completed">Completed</option>
                </select>
            </div>
            <div className='flex justify-center items-center mt-4'>
                <button
                    type="submit"
                    className='bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg focus:scale-95 transform transition-transform duration-150 text-white'
                >
                    Add Task
                </button>
                <button
                    type="button"
                    onClick={handleClear}
                    className='bg-red-600 hover:bg-red-700 px-4 py-2 ms-2 rounded-lg focus:scale-95 transform transition-transform duration-150 text-white'
                >
                    Clear
                </button>

                {/* {JSON.stringify(formData)} to prin the data */}
            </div>
        </form>
    )
}

export default AddTaskForm