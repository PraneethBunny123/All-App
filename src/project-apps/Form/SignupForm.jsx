import { useState } from "react"

export default function SignupForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState({})

    const nameError = 'please enter a valid name'
    const emailError = 'please enter a valid email'
    const passwordError = 'please enter a valid password'
    
    function handleSubmit() {
        if(name.trim().length < 1) {
            setErrors(prevState => ({...prevState, nameError}))
        }

        if(!email.trim().includes('@') || email.trim().length < 6) {
            setErrors(prevState => ({...prevState, emailError }))
        }

        if(password.trim().length < 1) {
            setErrors(prevState => ({...prevState, passwordError}))
        }
    }

    


    return (
        <div>
            <form >
                <input value={name} type="text" onChange={(e) => setName(e.target.value)}/>
                <input value={email} type="text" onChange={(e) => setEmail(e.target.value)}/>
                <input value={password} type="text" onChange={(e) => setPassword(e.target.value)}/>
                <div>
                    {errors.nameError &&  <p>{errors.nameError}</p>}
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}