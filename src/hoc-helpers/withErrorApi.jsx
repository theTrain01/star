import React from 'react'
import ErrorMessage from '../components/ErrorMessage'

export const withErrorApi = View => {
    return props => {
    const [errorApi, setErrorApi] = React.useState(false)
        return (
            <>
                {errorApi
                    ? <h2>ERROR!</h2>
                    : <View
                        setErrorApi = {setErrorApi}     
                        {...props}         
                    />
                }
            
            </>
        )
    }
}