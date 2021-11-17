import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

import styles from "./styles.module.scss";
import { FormLoader } from "../FormLoader";

type ButtonProps = {
  className?: string;
  to?: string;
  onClick?: () => void;
  id?: string;
  children: ReactNode;
  invert?: boolean;
  loading?: boolean;
  disabled?: boolean;
  selected?: boolean;
  isSubmit?: boolean;
  maxWidth?: boolean;
};

export const Button = ({
  className,
  to,
  onClick,
  id,
  children,
  invert,
  loading,
  disabled,
  selected,
  maxWidth,
}: ButtonProps) => {
  if (to)
    return (
      <NavLink
        to={to}
        onClick={onClick}
        id={id}
        className={classnames(styles.button, className, {
          [styles.invert]: invert,
          [styles.disabled]: disabled || loading,
          [styles.selected]: selected,
          [styles.hidden]: loading,
          [styles.maxWidth]: maxWidth,
        })}
      >
        {children}
        {loading && (
          <span className={styles.loader}>
            <FormLoader />
          </span>
        )}
      </NavLink>
    );

  return (
    <button
      onClick={onClick}
      id={id}
      className={classnames(styles.button, className, {
        [styles.invert]: invert,
        [styles.disabled]: disabled || loading,
        [styles.selected]: selected,
        [styles.hidden]: loading,
        [styles.maxWidth]: maxWidth,
      })}
    >
      {children}
      {loading && (
        <span className={styles.loader}>
          <FormLoader />
        </span>
      )}
    </button>
  );
};
