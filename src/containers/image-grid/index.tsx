import React from 'react';
import { useDispatch } from 'react-redux';
import ImageCard from '../../components/image-card';
import { setIndex, setShow } from '../../util/gallery-slice';


interface props{
    images: string[];
}

const ImageGrid = ({images}: props) => {
  const dispatch = useDispatch();

  const showGallery = (index: number) => {
    dispatch(setIndex(index));
    dispatch(setShow());
  }

  return (
    <div className='row'>
        <div className="col-lg-12 px-5 my-3">
            <h2 className='text-center mb-3'>Galería</h2>
            <div className="row">
              {
                (images.length > 0) ?
                images.map((image, index) => <ImageCard openModal={() => showGallery(index)} src={image} key={image} />)
                : <h5 className="text-center">Aún no hay fotos</h5>
              }
            </div>
        </div>
    </div>
  )
}

export default ImageGrid