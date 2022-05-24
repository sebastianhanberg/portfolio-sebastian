import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'
import Avt2 from '../../assets/avatar2.jpg'
import Avt3 from '../../assets/avatar3.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const data = [
    {
        avatar: Avt1,
        name: 'Sebastian Hånberg, Ägare Sebastian',
        review: ' - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis corrupti magni possimus, consequatur quos adipisci. Numquam, velit similique exercitationem laborum ipsum dolores quaerat ipsa, ullam eligendi nihil suscipit iure id '
    },
    {
        avatar: Avt2,
        name: 'Sebastian Hånberg, Ägare Sebastian',
        review: ' - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis corrupti magni possimus, consequatur quos adipisci. Numquam, velit similique exercitationem laborum ipsum dolores quaerat ipsa, ullam eligendi nihil suscipit iure id '
    },
    {
        avatar: Avt3,
        name: 'Sebastian Hånberg, Ägare Sebastian',
        review: ' - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis corrupti magni possimus, consequatur quos adipisci. Numquam, velit similique exercitationem laborum ipsum dolores quaerat ipsa, ullam eligendi nihil suscipit iure id '
    },
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}

            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className='client__avatar'>
                                    <img src={avatar} alt="Avatar One" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className="client__review">
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials