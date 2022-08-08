import React from 'react'

export default function Noteitem(props) {
    // here it is taking props from the notes and then it is rendreing according to them
    const { note } = props
    return (
        <>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {note.title}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {note.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi suscipit voluptatem dolore quidem vel quod commodi corporis dignissimos porro. Reprehenderit ipsam similique consequuntur dignissimos repudiandae nisi odit libero fugiat fuga.
                    </p>
                    <i className="fa-solid fa-trash-can m-4 text-xl text-yellow-200"></i>
                    <i className="fa-solid fa-pen-to-square m-4 text-xl text-yellow-200"></i>
                </div>
            </div>
      </>
    )
}
