import { DateType } from './DateType';

export type CustomDateType = DateType & {
  customDate: {
    dayName: string;
    dateName: string;
    monthName: string;
  };
};
