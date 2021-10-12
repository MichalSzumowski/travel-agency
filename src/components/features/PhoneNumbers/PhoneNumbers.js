import React from 'react';
import styles from './PhoneNumbers.scss';

class PhoneNumbers extends React.Component {
  newPhone() {
    const currentDate = new Date();
    const currentHour = currentDate.getUTCHours();
  
    if (currentHour >= 8 && currentHour < 12){
      return 'Amanda, 678.243.8455';
    } else if (currentHour >= 12 && currentHour < 16) {
      return 'Tobias, 278.443.6443';
    } 
    else if (currentHour >= 16 && currentHour < 22) {
      return 'Helena, 167.280.3970';
    } else {
      return 'The office opens at 8:00 UTC';
    }
  }
  
  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.phone}>{this.newPhone()}</h3>
      </div>
    );
  }
}
  
export default PhoneNumbers;