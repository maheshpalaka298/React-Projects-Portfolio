import React, { useState } from 'react';
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';
import Image1 from '../../Images/Image1.jpg';
import Image2 from '../../Images/Image2.jpg';
import Image3 from '../../Images/Image3.avif';

const portfolioData =[
    {
        id : 2,
        name : "Career Pathways",
        image : Image1,
        link : '',
    },
    {
        id : 3,
        name : "Portfolio",
        image : Image2,
        link : '',
    },
    {
        id : 2,
        name : "ToDo App",
        image : Image3,
        link : '',
    },

]

const filterData = [
    {
        filterId : 1,
        label : 'All'
    },
    {
        filterId : 2,
        label : 'Development'
    },
    {
        filterId : 3,
        label : 'Design'
    },
]

const Portfolio = () => {

    const [filteredvalue,setFilteredValue] = useState(1)
    const [hoveredValue,setHoveredValue] = useState(null)


    function handleFilter(currentId){
        setFilteredValue(currentId)
    }

    function handleHover (index){
        setHoveredValue(index)
    }
    const filteredItems = 
        filteredvalue == 1 
        ? portfolioData 
        : portfolioData.filter(item=>item.id === filteredvalue)

    console.log(filteredItems);
    return (
        <section id="portfolio" className="portfolio">

            <PageHeaderContent
            headerText = "My Profile"
            icon ={<BsInfoCircleFill size={40}/>}
            />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {
                        filterData.map((item)=>(
                            <li className={item.filterId === filteredvalue ? 'active' : ''}onClick={()=>handleFilter(item.filterId)} key={item.filterId}>{item.label}</li>
                        ))
                    }
                </ul>
                <div className="portfolio__content__cards">
                    {
                        filteredItems.map((item,index)=>(
                            <div 
                                className="portfolio__content__cards__item" 
                                key={`cardItems${item.name.trim()}`}
                                onMouseEnter={()=>handleHover(index)}
                                onMouseLeave={()=>handleHover(null)}
                            >
                                <div className="portfolio__content__cards__item__img-wrapper">
                                    <a>
                                        <img  alt="dummy data" src={item.image}></img>
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        index === hoveredValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                <button>Visit</button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Portfolio;