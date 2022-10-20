import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 2000)
    }, [navigate])
    return (
        <h1>Page Not Found</h1>
    )
}