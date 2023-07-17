import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import logo from "/logo.png";

const LoginScreen = () => {
    const { login, googleLogin } = useContext(AuthContext)

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
        login(values)
    }

    return (
        <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-slate-900 w-screen h-screen'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm '>
            <img src={logo} className="ml-9 p-1" />
                <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white'>Login</h2>
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

                        <button className='flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' type='submit'>Iniciar sesión</button>
                        <p className='mt-10 text-center text-sm text-gray-500'>
                            <Link to="/register" className='font-semibold leading-6 text-gray-400 hover:text-gray-100'>Registrarme</Link>
                        </p>
                    </form>
                </div>
                <button className='flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4' onClick={googleLogin}>Iniciar sesión con Google</button>
            </div>
        </div>
    )
}

export default LoginScreen