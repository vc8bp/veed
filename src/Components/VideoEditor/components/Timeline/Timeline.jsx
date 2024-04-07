import React, { useState } from 'react';
import styles from './Timeline.module.scss'; // Import your SCSS file for styling
import { useDispatch, useSelector } from 'react-redux';
import { addMedia } from '../../../../redux/projectSlice';
import { convertVideoToImages } from '../../../../hooks/videoToImagesConverter';

const Timeline = ({handleAddMediaClick}) => {
  const media = useSelector(p => p.project.media)
  console.log(media)

  const dispatch = useDispatch()

  const handleVideoChange = async (event) => {
    const file = event.target.files[0]
    const src = URL.createObjectURL(event.target.files[0]);
    
    let frames = []
    if(file.type.includes("video")) {
        frames = await convertVideoToImages(src, 1);
    } 

    dispatch(addMedia({media: src, frames}))
  };


  return (
    <div className={styles['timeline-container']}>

      {media.length ? (
        <div className={styles.wrapper}>
          <div className={styles['time-series']}>
            {new Array(media.length+1).fill().map((e, i) => (
                <div key={i}>{i%5 == 0 ? `${Math.round(i)}s` : "|"}</div>
            ))}
          </div>
          <div className={styles.timeline}>
            {media.data.map(med => (
                med.frames.map((image, index) => (
                    <img key={`${med.id}-${index}`} src={image} alt={`frame-${index}`} className={styles['timeline-image']} />
                ))
            ))}
          </div>
        </div>
      ) : 
      <>
        <div className={styles['add-media-btn']} onClick={handleAddMediaClick}>
            Add Media
        </div>
      </>
    }

        <input id="video-input" type="file" style={{ display: 'none' }} onChange={handleVideoChange} />
    </div>
  );
}

export default Timeline;
