import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-[480px] ">
            <div className="text-center">
                <h1 className="text-4xl font-medium">404</h1>
                <p className="text-xl font-medium m-6">Sorry, the page you're looking for can't be found.</p>
                <Link to="/home" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Go Home</Link>
            </div>
        </div>
    )
}

export default ErrorPage