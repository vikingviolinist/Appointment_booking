import { MouseEvent } from 'react';
import styles from './TimePicker.module.css';
import { TimeType } from '../../types/TimeType';

type Props = {
  slots: TimeType[];
  onTimeSelect: (e: MouseEvent<HTMLButtonElement>) => void;
  selectedDate: string;
  selectedTime: string;
};

const TimePicker = ({
  slots,
  onTimeSelect,
  selectedDate,
  selectedTime,
}: Props) => {
  if (!selectedDate) return null;

  return (
    <>
      <h2>Select Time</h2>
      <div className={styles.buttons}>
        {slots.map(({ time, isAvailable }) => {
          const isSelected = time === selectedTime;
          const date = new Date(time);
          const hours = ('0' + date.getHours()).slice(-2);
          const minutes = ('0' + date.getMinutes()).slice(-2);
          const parsedTime = `${hours}:${minutes}`;

          return (
            <button
              className={`
                ${styles.button}
                ${isAvailable ? styles.isAvailable : ''}
                ${isSelected ? styles.isSelected : ''}
              `}
              data-time={time}
              onClick={onTimeSelect}
              disabled={!isAvailable}
              title={!isAvailable ? 'Time slot booked' : ''}
              key={time}
            >
              <span>{parsedTime}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default TimePicker;
