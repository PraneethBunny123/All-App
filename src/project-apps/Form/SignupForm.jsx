import { useState } from "react"

export default function SignupForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState({})

    
    function handleSubmit(e) {
        e.preventDefault()
        setErrors({})
        const newErrors = {}

        if(name.trim().length < 1) {
            newErrors.nameError = 'please enter a valid name'
        }

        if(!email.trim().includes('@') || email.trim().length < 6) {
            newErrors.emailError = 'please enter a valid email'
        }

        if(password.trim().length < 1) {
            newErrors.passwordError = 'please enter a valid password'
        }

        setErrors(newErrors)
        
        
        if(Object.keys(newErrors).length === 0) {
            setName('')
            setEmail('')
            setPassword('')
        }
    }    


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} type="text" onChange={(e) => setName(e.target.value)}/>
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)}/>
                <input value={password} type="password" onChange={(e) => setPassword(e.target.value)}/>
                <div>
                    {errors.nameError &&  <p>{errors.nameError}</p>}
                    {errors.emailError &&  <p>{errors.emailError}</p>}
                    {errors.passwordError &&  <p>{errors.passwordError}</p>}
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}