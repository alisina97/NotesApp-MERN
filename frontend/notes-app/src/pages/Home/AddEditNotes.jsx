import React, { useState } from 'react'
import TagInput from '../../components/Input/TagInput'

function AddEditNotes() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState([]);
    

  return (
    <div>
        <div className='flex flex-col gap-2'>
            <label className='input-label'>TITLE</label>
            <input
                type='text'
                className='text-2xl text-slate-950 outline-none'
                placeholder='Go to gym at 5pm'
                value={title}
                onChange={({target}) => { setTitle(target.value)}}
            />
        </div>

        <div className='flex flex-col gap-2 mt-4'>
            <label className='input-label'>CONTENT</label>
            <textarea
                type='text'
                className='text-sm text-slate-950 outline-none bg-slate-50'
                placeholder='Content'
                rows={10}
                value={content}
                onChange={({target}) => { setContent(target.value)}}
                />
        </div>
        <div className='mt-3'>
            <label className='input-label'>TAGS</label>
            <TagInput tags={tags} setTags={setTags} />
        </div>
        <button className='btn-primary font-medium mt-5 p-3' onClick={() => {}}>ADD</button>
    </div>
  )
}

export default AddEditNotes