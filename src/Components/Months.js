import React from 'react'
import sData from '../data/data.json'

function Months({setCards}) {
    return (
        <>
        <details>{JSON.stringify(sData)}</details>
        <table className="table">
            <thead>
                <tr>
                    <th>Choose a class by start date</th>
                </tr>
            </thead>
            <tbody>
            
                <tr key={'all'}>
                    <td style={{cursor: 'pointer'}}><a onClick={()=> setCards(sData)}>All Students</a></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default Months