/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from './ad-banner.module.css';

type props = {
    id?: string;
    imgUrl: string;
    imgAlt?: string;
    phoneNumber: string;
    orientation?: 'reverse';
    children?: React.ReactNode;
}

const AdBanner = ({ imgUrl, imgAlt, orientation, phoneNumber, id, children }: props) => {

    const className = `row d-flex align-items-center ${orientation == 'reverse' && 'flex-row-reverse'}`;

    return (
        <div className={styles.banner_height + " container-fluid bg-grey-color"}>
            <div className={className} id={id}>
                <div className='col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center'>
                    <img src={imgUrl} alt={imgAlt} className={styles.image + " w-100"} />
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-center'>
                    {children}
                    <a href={`tel:${phoneNumber}`} className="btn btn-warning w-75 mb-3">{phoneNumber}</a>
                </div>
            </div>
        </div>
    );
}

export default AdBanner;