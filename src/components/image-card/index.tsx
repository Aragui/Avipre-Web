/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { Card } from './image-card.styles'

interface props {
    src: string;
    openModal: () => void;
}

const ImageCard = ({ src, openModal }: props) => {

    return (
        <Card className="col-md-3 col-sm-6 mb-4">
            <div className="image-container" onClick={openModal}>
                <img src={src} alt={src.split('/').pop()} className="w-100 h-100" />
            </div>
        </Card>
    )
}

export default ImageCard