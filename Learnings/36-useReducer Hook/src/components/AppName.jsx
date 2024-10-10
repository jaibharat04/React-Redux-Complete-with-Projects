import styles from './AppName.module.css'
import { GoTasklist } from "react-icons/go";


import React from "react";

const AppName = () => {
  return <h1 className={styles.todoHeading}> 
  <GoTasklist />&ensp;
  TODO App&ensp;
  <GoTasklist/>
  </h1>;
};

export default AppName;
