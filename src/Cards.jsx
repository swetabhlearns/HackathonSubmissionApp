import React, { useContext, useState } from 'react'
import Card from './components/Card'
import DataContext from './DataContext'

const Cards = () => {
    const { favsData, filterData, favData, favSubmission, allSubmission } = useContext(DataContext)

    return (
        <div className='cards'>
            {
                allSubmission && filterData && filterData.map((item, idx) =>
                (
                    <Card key={idx} item={item} />
                )
                )
            }

            {

                favSubmission && favsData && favsData.map((item, idx) =>
                (
                    <Card key={idx} item={item} />
                )
                )
            }


        </div>
    )
}

export default Cards