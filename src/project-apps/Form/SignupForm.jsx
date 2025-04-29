import { useState } from "react"

export default function SignupForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState({})

    
    function handleSubmit(e) {
        e.preventDefault()
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
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <div className="mb-4">
                    <input 
                        value={name} 
                        type="text" 
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.nameError && <p className="text-red-500 text-sm mt-1">{errors.nameError}</p>}
                </div>    

                <div className="mb-4">
                    <input 
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.emailError && <p className="text-red-500 text-sm mt-1">{errors.emailError}</p>}
                </div>

                <div className="mb-6">
                    <input 
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.passwordError && <p className="text-red-500 text-sm mt-1">{errors.passwordError}</p>}
                </div>
                <input value={password} type="password" onChange={(e) => setPassword(e.target.value)}/>
                
                <button 
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}