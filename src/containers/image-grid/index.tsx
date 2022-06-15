import React from 'react';
import ImageCard from '../../components/image-card';


interface props{
    images: string[];
}

const ImageGrid = ({images}: props) => {
  return (
    <div className='row'>
        <div className="col-lg-12 px-5 my-3">
            <h2 className='text-center mb-3'>Galería</h2>
            <div className="row">
              {
                (images.length > 0) ?
                images.map(image => <ImageCard src={image} key={image} />)
                : <h5 className="text-center">Aún no hay fotos</h5>
              }
            </div>
        </div>
    </div>
  )
}

export default ImageGrid