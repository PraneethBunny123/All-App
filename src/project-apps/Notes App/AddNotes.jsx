import { useContext, useState } from "react"
import {v4 as uuidv4} from 'uuid'
import TagsDropdown from "./TagsDropdown"
import { TagsDropdownContext } from "./TagsContext"

export default function AddNotes({setNotes}) {
    const [textTyped, setTextTyped] = useState('')
    const selectedTags = useContext(TagsDropdownContext)

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
                tags: []
            }])
            setTextTyped('')
        }
        
    }

    return (
        <div>
            <input value={textTyped} onChange={handleOnChange} type="text" placeholder="Add Note..."/>
            <TagsDropdown />
            <button onClick={handleAddNotes}>Add Note</button>
        </div>

    )
}
