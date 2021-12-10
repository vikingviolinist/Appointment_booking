import { MouseEvent } from 'react';
import styles from './DatePicker.module.css';
import { CustomDateType } from '../../types/CustomDateType';

type Props = {
  dates: CustomDateType[];
  onDateSelect: (e: MouseEvent<HTMLButtonElement>) => void;
  selectedDate: string;
};

const DatePicker = ({ dates, onDateSelect, selectedDate }: Props) => {
  return (
    <>
      <h2>Select Date</h2>
      <div className={styles.buttons}>
        {dates.map(({ date, customDate, isAvailable }) => {
          const isSelected = date === selectedDate;

          return (
            <button
              className={`
                ${styles.button} 
                ${isAvailable ? styles.isAvailable : ''}
                ${isSelected ? styles.isSelected : ''}
            `}
              data-date={date}
              onClick={onDateSelect}
              disabled={!isAvailable}
              title={!isAvailable ? 'Date fully booked' : ''}
              key={date}
            >
              <span>{customDate.dayName}</span>
              <span>{customDate.dateName}</span>
              <span>{customDate.monthName}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default DatePicker;
