/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { Card } from './image-card.styles'

interface props {
    src: string;
}

const ImageCard = ({ src }: props) => {

    return (
        <Card className="col-md-3 col-sm-6 mb-4">
            <div className="image-container">
                <img src={src} alt={src.split('/').pop()} className="w-100 h-100" />
            </div>
        </Card>
    )
}

export default ImageCard