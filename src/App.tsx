import { useEffect, useState, MouseEvent } from 'react';
import { Header, DatePicker, TimePicker, SubmitButton } from './components';
import fetchDates from './utils/fetchDates';

const App = () => {
  const [dates, setDates] = useState([]);
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const onDateSelect = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectedTime('');
    const tempDate: string = e.currentTarget.getAttribute('data-date') || '';
    const { slots: tempSlots }: any =
      dates.find(({ date }) => date === tempDate) || [];
    setSelectedDate(tempDate);
    setSlots(tempSlots);
  };

  const onTimeSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const time: string = e.currentTarget.getAttribute('data-time') || '';
    setSelectedTime(time);
  };

  useEffect(() => {
    const startDate: string = new Date().toISOString();
    const tempDate: Date = new Date(startDate);
    tempDate.setDate(tempDate.getDate() + 6);
    tempDate.setHours(23);
    const endDate: string = new Date(tempDate).toISOString();

    fetchDates(startDate, endDate)
      .then((res) => setDates(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Loading...</h2>;

  if (hasError) return <h1>There was a problem fetching data</h1>;

  return (
    <>
      <Header />
      <DatePicker
        dates={dates}
        onDateSelect={onDateSelect}
        selectedDate={selectedDate}
      />
      <TimePicker
        slots={slots}
        onTimeSelect={onTimeSelect}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
      />
      <SubmitButton selectedTime={selectedTime} />
    </>
  );
};

export default App;
