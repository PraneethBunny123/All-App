import { useState } from "react"
import {v4 as uuidv4} from 'uuid'
import TagsDropdown from "./TagsDropdown"

export default function AddNotes({setNotes, selectedTags, setSelectedTags}) {
    const [textTyped, setTextTyped] = useState('')

    console.log(selectedTags)

    function handleOnChange(e) {
        setTextTyped(e.target.value)
    }

    function handleAddNotes() {
        const now = new Date()
        const timeStamp = now.toLocaleString('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short'
        })
        
        if(textTyped.trim() !== '') {
            setNotes(prevNotes => [...prevNotes, {
                id: uuidv4(),
                Notes: textTyped,
                timeStamp: timeStamp,
                tags: [...selectedTags]
            }])
            setTextTyped('')
        }
        
    }

    return (
        <div>
            <input value={textTyped} onChange={handleOnChange} type="text" placeholder="Add Note..."/>
            <TagsDropdown setSelectedTags={setSelectedTags}/>
            <button onClick={handleAddNotes}>Add Note</button>
        </div>

    )
}
