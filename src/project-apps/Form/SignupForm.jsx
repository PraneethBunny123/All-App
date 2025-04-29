import { useState } from "react"

export default function SignupForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState({})

    return (
        <div>
            <form>
                <input value={name} type="text" onChange={(e) => setName(e.target.value)}/>
                <input value={email} type="text" onChange={(e) => setEmail(e.target.value)}/>
                <input value={password} type="text" onChange={(e) => setPassword(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}