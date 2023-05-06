import React from 'react'
import sData from '../data/data.json'

function Months({ setCards, setC }) {

    function handleClick(args) {
        setCards(sData.filter(item => item.cohort.cohortCode === args))
    }
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Choose a class by start date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={0} className='border-success'>
                        <td style={{ cursor: 'pointer' }}><a onClick={() => { setCards(sData); setC('All Students') }}>All Students</a></td>
                    </tr>
                    {
                        [...new Set(sData.map(item => item.cohort.cohortCode + ',' + item.cohort.cohortStartDate))].
                            sort((a, b) => {
                                const cohortCodeA = new Date(a.split(',')[1]);
                                const cohortCodeB = new Date(b.split(',')[1]);
                                return cohortCodeA - cohortCodeB;
                            }).map((item, i) => {
                                return <tr key={i + 1} className='border-success'>
                                    <td style={{ cursor: 'pointer' }}><a onClick={() => { handleClick(item.split(',')[0]); setC(item.split(',')[0]) }}>{item.split(',')[0].replace(/(\D)(\d)/, '$1 $2')}</a></td>
                                </tr>
                            })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Months