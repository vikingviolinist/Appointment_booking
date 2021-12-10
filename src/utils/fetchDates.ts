import { DateType } from '../types/DateType';

const fetchDates = async (startDate: string, endDate: string) => {
  try {
    const res = await fetch(
      `api/v1/locations/12eea617-91f8-4f27-9393-8bd7e58e9b79/availability?serviceIds=%5B%22b004fefd-1d99-41d9-9f43-cf374466c2c1%22%5D&startDate=${startDate}&endDate=${endDate}`
    );

    const { data } = await res.json();
    const dates = data.map((dateObj: DateType) => {
      const currDate = new Date(dateObj.date).toString().split(' ');
      const [dayName, monthName, dateName] = currDate;
      const customDate = { dayName, monthName, dateName };
      return { customDate, ...dateObj };
    });

    return dates;
  } catch (err) {
    console.log(err);
  }
};

export default fetchDates;
