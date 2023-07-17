import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import logo from "/logo.png";

const RegisterScreen = () => {
    const { register } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        register(values)
    }

    return (
        <div className='auth-container flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-slate-900 w-screen h-screen'>
            <div className='auth-modal sm:mx-auto sm:w-full sm:max-w-sm'>
            <img src={logo} className="ml-9 p-1" />
                <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white'>Registrarse</h2>
                <hr/>

                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            <div className='mt-2'>
                            <input 
                                value={values.email}
                                onChange={handleInputChange}
                                type='email' 
                                placeholder='Email'
                                className='form-control bg-slate-800 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-500 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
                                name='email'
                            />
                            </div>
                            <div className='mt-2'>
                            <input 
                                value={values.password}
                                onChange={handleInputChange}
                                type='password' 
                                placeholder='Contraseña'
                                className='form-control bg-slate-800 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-500 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
                                name='password'
                            />
                            </div>
                            <p className='mt-10 text-center text-sm text-gray-500'>
                            <button className='font-semibold leading-6 text-gray-400 hover:text-gray-100' type='submit'>Registrarse</button>
                            </p>
                            <p className='mt-10 text-center text-sm text-gray-500'>
                            <Link to="/login" className='font-semibold leading-6 text-gray-400 hover:text-gray-100'>Ya estoy registrado</Link>
                            </p>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen