import React, { useContext } from 'react'
import { UserCount } from './test'

export const ComponentC = () => {
    const count = useContext(UserCount);

    return (
        <>
            <div>ComponentC</div>
            <p>{count}</p>
        </>
    )
}
