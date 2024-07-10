import { addDays, format } from 'date-fns';

export const addDaysToDate = (date: Date, days: number): Date => {
    return addDays(date, days);
};

export const formatDate = (date: Date, formatString: string): string => {
    return format(date, formatString);
};
