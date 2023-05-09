import React from 'react'
import sData from '../data/data.json'

function Months({ setCards, setC, cohort }) {

    function handleClick(args) {
        if (cohort !== args) setCards(sData.filter(item => item.cohort.cohortCode === args))
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
                        <td style={{ cursor: 'pointer' }} onClick={() => { setCards(sData); setC('All Students') }}>All Students</td>
                    </tr>
                    {
                        sData.map(item => item.cohort.cohortCode + ',' + item.cohort.cohortStartDate).sort((a, b) => {
                            const cohortCodeA = new Date(a.split(',')[1]);
                            const cohortCodeB = new Date(b.split(',')[1]);
                            return cohortCodeA - cohortCodeB;
                        }).map(item => item.split(',')[0]).filter((item, i, arr) => {
                            return arr.indexOf(item) === i
                        }).map((item, i) => {
                            return <tr key={i + 1} className='border-success'>
                                {/* <td style={{ cursor: 'pointer' }}><a onClick={() => { handleClick(item); setC(item) }}>{item.replace(/(\D)(\d)/, '$1 $2')}</a></td> */}
                                <td style={{ cursor: 'pointer' }} onClick={() => { handleClick(item); setC(item) }}>{item.replace(/(\D)(\d)/, '$1 $2')}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Months