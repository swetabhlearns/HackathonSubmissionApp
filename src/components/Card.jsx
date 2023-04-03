import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import DataContext from '../DataContext';
import ReactTimeago from 'react-timeago';

const Card = ({ item }) => {
    const navigate = useNavigate()
    const { setDetails } = useContext(DataContext)
    const handleClick = () => {
        setDetails([item])
        navigate('/details')
    }

    return (

        <div className='card-container' onClick={handleClick}>
            <section className='displayCard'>
                <div className='cardHeader'>
                    <div className="cardHeaderimg">
                        <img src={`${item.image}`} alt="header-img" />
                    </div>
                    <div className="cardHeaderText">
                        {item.title}
                    </div>
                </div>
                <div className="cardBody">
                    <div className="cardBodySummary">
                        {item.summary}
                    </div>

                </div>
                <div className='cardBodyDate'>
                    <p>
                        Uploaded{" "}
                        <ReactTimeago
                            live={false}
                            date={new Date(item.startDate).toUTCString()}
                        />
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Card