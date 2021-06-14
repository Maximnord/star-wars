import PropTypes from 'prop-types';
import cn from 'classnames';
import '../index.css';
import icon from './img/cancel.svg';
import styles from './UiInput.module.css'

const UiInput = ({
    handleInputChange,
    value,
    placeholder,
    classes,
}) => ( 
        <div className={cn(styles.wrapper__input, classes)}>
            <input 
            type="text" 
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={placeholder}
            className={styles.input}
            />
            <img 
            onClick={() => value && handleInputChange('')}
            src={icon}
            alt="Clear" 
            className={cn(styles.clear, !value && styles.clear__disabled)}
            />
            
        </div>
     );

UiInput.propTypes = {
    handleInputChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    classes: PropTypes.string,
}
export default UiInput;