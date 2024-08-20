
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

export const evaluateMonth = (month: string) => {
    let result = " in ";
    let monthsArray = [];

    if (month.length===0 || month==="*" || month===" ") {
        return "";
    }

    if (month.includes("-")) {
        monthsArray = month.split("-");
        if (monthsArray.length != 2) return "";
        const start = Number.parseInt(monthsArray[0]);
        const end = Number.parseInt(monthsArray[1]);
        if ((start >= end) || (start>12) || (end>12)) return "";
        result = result + "every month from "+months[start-1]+" through "+months[end-1];
        return result;
    }

    monthsArray = month.split(",");

    if (monthsArray.length == 1) {
        if (Number.parseInt(month) > 0 && Number.parseInt(month)<12)
            result = result + months[Number.parseInt(month)-1];
        else
            result = "";
    }
    else {
        let val = 0;
        for (let i=0; i<monthsArray.length; ++i) {
            val = Number.parseInt(monthsArray[i]);
            if (val<0 || val>12) return "";
            if (i == monthsArray.length-1) {
                result = result + "and " + months[val-1];
            }
            else {
                result = result + months[val-1] + ", ";
            }
        }
    }

    return result;
}