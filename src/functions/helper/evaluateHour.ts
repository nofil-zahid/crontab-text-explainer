export const evaluateHour = (hour: string) => {
    let result = " past hour ";
    let hourArr = [];

    if (hour.length===0 || hour==="*" || hour===" ") {
        return "";
    }

    if (hour.startsWith("*/")) {
        hour = hour.slice(2);
        result = hour.includes("-") ? " hour of " : " every hour of "
    }

    if (hour.includes("-")) {
        hourArr = hour.split("-");
        if (hourArr.length != 2) return "";
        const start = Number.parseInt(hourArr[0]);
        const end = Number.parseInt(hourArr[1]);
        if ((start >= end) || (start>23) || (end>23)) return "";
        result = " past every hour from "+start+" through "+end;
        return result;
    }

    hourArr = hour.split(",");

    if (hourArr.length == 1) {
        if (Number.parseInt(hour) > 0 && Number.parseInt(hour)<32)
            result = result + Number.parseInt(hour);
        else
            result = "";
    }
    else {
        let val = 0;
        for (let i=0; i<hourArr.length; ++i) {
            val = Number.parseInt(hourArr[i]);
            if (val<0 || val>23) return "";
            if (i == hourArr.length-1) {
                result = result + "and " + val;
            }
            else {
                result = result + val+ (i===hourArr.length-1 ? ", " : " ");
            }
        }
    }

    return result;
}