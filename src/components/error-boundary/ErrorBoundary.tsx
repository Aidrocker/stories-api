import React from 'react';
import 'src/styles/ErrorBoundary.css';

interface ErrorBoundaryProps {
    text: string
    src?: string
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ text, src }) => {
    return (
        <div className='error-boundary'>
            <div className='container'>
                <div className='error-boundary__img'>
                    <img src={src} alt="" />
                </div>
                <div className='error-boundary__title'>
                    {text}
                </div>
            </div>

        </div>
    )
}

export default ErrorBoundary;