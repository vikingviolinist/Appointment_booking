import styles from './SubmitButton.module.css';

type Props = {
  selectedTime: string;
};

const SubmitButton = ({ selectedTime }: Props) => {
  if (!selectedTime) return null;

  // Get values from date string, such as 'Mon Dec 13 2021 09:15:00 ...'
  const dateArr = new Date(selectedTime).toString().split(' ');
  const [day, month, date, , time] = dateArr;
  // Trim last three characters (14:00:00 => 14:00)
  const parsedTime = time.slice(0, -3);
  const message = `See you on ${day} ${date} ${month} at ${parsedTime} 🐶`;

  return (
    <button className={styles.button} onClick={() => alert(message)}>
      Submit
    </button>
  );
};

export default SubmitButton;
