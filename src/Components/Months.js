import React from 'react'
import sData from '../data/data.json'

function Months({ setCards }) {
    return (
        <>
            <p>{ }</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Choose a class by start date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={0} className='border-success'>
                        <td style={{ cursor: 'pointer' }}><a onClick={() => setCards(sData)}>All Students</a></td>
                    </tr>
                    {
                        [...new Set(sData.map(item => item.cohort.cohortCode))].map((item, i) => {
                            return <tr key={i+1} className='border-success'>
                                <td style={{ cursor: 'pointer' }}><a onClick={() => setCards(sData)}>{item.replace(/(\D)(\d)/, '$1 $2')}</a></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Months