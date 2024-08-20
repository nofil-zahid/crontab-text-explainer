export const evaluateHour = (hour: string) => {
    let result = " past hour ";
    let daysInMonth = [];

    if (hour.length===0 || hour==="*" || hour===" ") {
        return "";
    }

    if (hour.includes("-")) {
        daysInMonth = hour.split("-");
        if (daysInMonth.length != 2) return "";
        const start = Number.parseInt(daysInMonth[0]);
        const end = Number.parseInt(daysInMonth[1]);
        if ((start >= end) || (start>23) || (end>23)) return "";
        result = " past every hour from "+start+" through "+end;
        return result;
    }

    daysInMonth = hour.split(",");

    if (daysInMonth.length == 1) {
        if (Number.parseInt(hour) > 0 && Number.parseInt(hour)<32)
            result = result + Number.parseInt(hour);
        else
            result = "";
    }
    else {
        let val = 0;
        for (let i=0; i<daysInMonth.length; ++i) {
            val = Number.parseInt(daysInMonth[i]);
            if (val<0 || val>23) return "";
            if (i == daysInMonth.length-1) {
                result = result + "and " + val;
            }
            else {
                result = result + val+ ", ";
            }
        }
    }

    return result;
}