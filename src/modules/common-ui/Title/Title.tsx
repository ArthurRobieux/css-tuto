import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

type TitleProps = {
  children: ReactNode;
  to?: string;
  sub?: string;
};

export const Title = ({ children, to, sub }: TitleProps) => {
  return (
    <div className={styles.title}>
      {to ? (
        <NavLink to={to} className={styles.navlink}>
          {children}
        </NavLink>
      ) : (
        children
      )}
      {sub && <span className={styles.subTitle}> &gt; {sub}</span>}
    </div>
  );
};
