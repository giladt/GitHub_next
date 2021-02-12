import React from 'react';
import style from './Button.module.css';
import Link from 'next/link';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link href='/anmeldung' className={style['btn-mobile']}>
    <a>
        <button
          className={style[`btn ${checkButtonStyle} ${checkButtonSize}`]}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </a>
    </Link>
  );
};


export default Button
