import { TimeType } from './TimeType';

export type DateType = {
  date: string;
  isAvailable: boolean;
  isOpen: boolean;
  slots: TimeType[];
};
