import React from 'react'
import { ComponentA } from './ComponentA'

export const UserCount = React.createContext(100);

export const Test = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <UserCount.Provider value={100}>
                <h1>TEST</h1>
                <ComponentA />
            </UserCount.Provider>
        </div>
    )
}
