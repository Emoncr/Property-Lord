import moment from 'moment';

export const useFormatDate = (dateString, format = 'DD MMMM, YYYY') => {
    return moment(dateString).utc().add(6, 'hours').format(format);
};
