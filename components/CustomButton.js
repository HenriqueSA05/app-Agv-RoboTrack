import React from 'react';
import styles from '../styles/styles';

const CustomButton = ({ title, onPress, color, style }) => (
    <button onClick={onPress} style={{ ...styles.button, backgroundColor: color, ...style }}>
        {title}
    </button>
);

export default CustomButton;