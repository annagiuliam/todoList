import { format } from 'date-fns';

function formatString(string) {
    if (string != "") {
        
        return string.split(/\W+/).join('');
    } else { return ""};
  
}

function formatDate(date) {
    if (date != "") {
        const dateInfo = date.split("-");
        const formDate = format(new Date(dateInfo[0], dateInfo[1] - 1, dateInfo[2]), "PP");
        return formDate;
    }
    
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export {formatString, formatDate, capitalize}