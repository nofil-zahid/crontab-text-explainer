export const evaluateDayOfMonth = (dom: string) => {
    let result = " on ";
    let daysInMonth = [];

    if (dom.length===0 || dom==="*" || dom===" ") {
        return "";
    }

    if (dom.includes("-")) {
        daysInMonth = dom.split("-");
        if (daysInMonth.length != 2) return "";
        const start = Number.parseInt(daysInMonth[0]);
        const end = Number.parseInt(daysInMonth[1]);
        if ((start >= end) || (start>31) || (end>31)) return "";
        result = result + "every day-of-month from "+start+" through "+end;
        return result;
    }

    daysInMonth = dom.split(",");

    result = result + "day-of-month ";

    if (daysInMonth.length == 1) {
        if (Number.parseInt(dom) > 0 && Number.parseInt(dom)<32)
            result = result + Number.parseInt(dom);
        else
            result = "";
    }
    else {
        let val = 0;
        for (let i=0; i<daysInMonth.length; ++i) {
            val = Number.parseInt(daysInMonth[i]);
            if (val<0 || val>31) return "";
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