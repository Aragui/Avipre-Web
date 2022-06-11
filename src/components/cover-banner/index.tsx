/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { BannerBackground } from './cover-banner.style'

interface props {
    urlImage: string;
    title: string;
}

const CoverBanner = ({ urlImage, title }: props) => {
    return (
        <BannerBackground>
            <div className="cover-wrapper">
                <img src={urlImage} alt={title} className="cover" />
                <div className="title-wrapper">
                    <h1 className="title">{title}</h1>
                </div>
            </div>
        </BannerBackground>
    )
}

export default CoverBanner