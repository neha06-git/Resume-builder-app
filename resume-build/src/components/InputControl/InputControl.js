import React from 'react'
import styles from './InputControl.module.css'
function InputControl({Label,...props}) {
  return (
    <div className={styles.container}>
        {
            Label&& <label>{Label}</label>
        }
        <input type="text" {...props} />
        
      
    </div>
  )
}

export default InputControl;
