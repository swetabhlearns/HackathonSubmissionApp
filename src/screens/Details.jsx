import React, { useContext, useState } from 'react'
import NavBar from '../components/NavBar'
import DataContext from '../DataContext';
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';



const Details = () => {
    const { favsData, fav, setFav, details, setFavData, favData, itemData, setFilterData, filterData } = useContext(DataContext)

    const navigate = useNavigate()

    const handleFavClick = (id) => {
        setFav(!fav)
        let index = filterData.map((e) => e.id).indexOf(id)
        let editData = [...filterData]
        editData[index].favs = fav
    }
    const handleDelete = (id) => {
        const updatedFilterData = filterData.filter((item) => item.id !== id);
        setFilterData(updatedFilterData);
        navigate('/', { replace: true })
    }
    const handleEdit = () => {
        navigate('/details/edit')
    }

    return (
        <div className='details'>
            <NavBar />
            <div className='details-container'>
                <div className='details-hero'>
                    <div className="details-hero-header">
                        <div className="details-hero-header-img">
                            <img src={details[0].image} alt="details-img" />
                            <div className="details-hero-header-title">
                                {details[0].title}
                            </div>
                        </div>
                        <div className="details-hero-header-button-container">
                            <button className='details-hero-btn' onClick={handleEdit}>Edit</button>
                            <button onClick={() => handleDelete(details[0].id)} className='details-hero-btn'>Delete</button>
                        </div>
                    </div>
                    <div className="details-body">
                        <div className="details-body-text">
                            {details[0].summary}
                        </div>
                        <div className="details-body-btn-container">
                            <div className='details-body-fav' onClick={() => handleFavClick(details[0].id)}>  <AiFillStar className={details[0].favs === true ? 'fav-active' : 'fav-toggle'} /> | </div>
                            <div className='details-body-date'>{details[0].startDate}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='details-hacktahon-body'>
                <div className="details-hacktahon-body-desc">
                    <div className="details-hacktahon-body-desc-title">
                        Description
                    </div>
                    <div className="details-hacktahon-body-desc-text">

                        {details[0].description}
                    </div>
                </div>
                <div className="details-hacktahon-body-details">
                    <div className="details-body-hackathon">
                        Hackathon
                    </div>
                    <div className="details-body-hackathon-title">
                        {details[0].hackathonName}
                    </div>
                    <div className="details-body-hackathon-date">
                        {details[0].startDate} to {details[0].endDate}
                    </div>
                    <div className="details-body-link-btn">
                        <button className='details-github-link-btn'>
                            GitHub Repository
                        </button>
                    </div>
                    <div className="details-body-link-btn">
                        <button className='details-github-link-btn'>
                            Other Link
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Details