'use client'
import { Reviews__slider } from "../sliders/reviews-slider"
import SwiperControls from "../sliders/reviews-slider/SwiperControls.jsx"
import styles from "./styles.module.scss"
import React, { useRef } from 'react';

export default function FourBlock() {
    const swiperRef = useRef(null);
    return (
        <>
            <section className={styles.FourBlock}>
                <span className={styles.bordr_topLeft}></span>
                <div className="container">
                    <div className="flex justify-between items-end">
                        <div className="sliderButtons">
                            <SwiperControls swiperRef={swiperRef}></SwiperControls>
                        </div>
                        <h2 className="title text-right text-5xl text-white">Məmnun müştərilərimizin <br />haqqımızda nə dediyinə baxın.</h2>
                    </div>
                    <div className="reviewsSlide pt-8">
                        <Reviews__slider swiperRef={swiperRef}></Reviews__slider>
                    </div>
                </div>
            </section>
        </>
    )
}