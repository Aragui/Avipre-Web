/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementIndex, incrementIndex, setIndex, setShow } from '../../util/gallery-slice';
import { RootState } from '../../util/store';

import { Background } from './gallery-viewer.styles'

interface props {
  images: string[];
}
const GalleryViewer = ({ images }: props) => {
  const {index, show} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  

  return (
    <Background show={show}>
      <div className="image-modal">
        {
          images.map((image, idx) => (<img src={image} className={idx == index ? 'image active' : 'image'} key={image} alt='' />))
        }
        <div className="buttons">
          <button className='left' onClick={() => dispatch(decrementIndex(images.length))}><i className="fas fa-chevron-left"></i></button>
          <button className='right' onClick={() => dispatch(incrementIndex(images.length))}><i className="fas fa-chevron-right"></i></button>
        </div>
        <button className="close" onClick={() => dispatch(setShow())}><i className="fas fa-times"></i></button>
        <div className="dots">
          {
            images.map((dot, idx) => (<div className={idx == index ? 'dot active' : 'dot'} key={dot.split('/').pop()}></div>))
          }
        </div>
      </div>
    </Background>
  )
}

export default GalleryViewer