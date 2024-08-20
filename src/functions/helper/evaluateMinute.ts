export const evaluateMinute = (min: string) => {
    let result = " minute ";
    let daysInMonth = [];

    if (min.length==0 || min === "") {
        return "";
    }

    if (min==="*") return "on every minute";

    if (min.includes("-")) {
        daysInMonth = min.split("-");
        if (daysInMonth.length != 2) return "";
        const start = Number.parseInt(daysInMonth[0]);
        const end = Number.parseInt(daysInMonth[1]);
        if ((start >= end) || (start>59) || (end>59)) return "";
        result = " every " + result + "from "+start+" through "+end;
        return result;
    }

    daysInMonth = min.split(",");

    if (daysInMonth.length == 1) {
        if (Number.parseInt(min) > 0 && Number.parseInt(min)<32)
            result = result + Number.parseInt(min);
        else
            result = "";
    }
    else {
        let val = 0;
        for (let i=0; i<daysInMonth.length; ++i) {
            val = Number.parseInt(daysInMonth[i]);
            if (val<0 || val>59) return "";
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