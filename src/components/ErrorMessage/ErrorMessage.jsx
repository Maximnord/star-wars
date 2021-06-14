import UiVideo from '@ui/UiVideo';
import video from './video/error.mp4';

import styles from './ErrorMessage.module.css'

const ErrorMessage = () => {
    return (
        <>
            <p className={styles.text}>
                <h2>OOPS - 404!</h2><br />
                <h3>The page doesn't Exixs.</h3>
                <h3>Sorry! We cannot display data...</h3>
            </p>

            <UiVideo src={video} classes={styles.video} playbackRate={1} />
        </>
    );
}

export default ErrorMessage;