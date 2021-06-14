import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './UiVideo.module.css';
import { useEffect, useRef } from 'react';


const UiVideo = ({
    src,
    classes,
    playbackRate = 1.0
}) => {
    const videoRef = useRef(null);

   useEffect(()=> {
       videoRef.current.playbackRate = playbackRate;
   }, []);

    return ( 

    <video 
        loop
        autoPlay
        muted
        className={cn(styles.video, classes)}
        playbackRate={playbackRate}
        ref={videoRef}
    >
        <source src={src} />
    </video>
    );
}
 
UiVideo.propTypes = {
    src: PropTypes.string,
    classes: PropTypes.number,
    playbackRate: PropTypes.string,
}
export default UiVideo;