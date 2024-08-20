export const evaluateMinute = (min: string) => {
    let result = " minute ";
    let minuteArr = [];

    if (min.length==0 || min === "") {
        return "";
    }

    if (min==="*") return "on every minute";

    if (min.startsWith("*/")) {
        min = min.slice(2);
        result = min.includes("-") ? " minute of " : " every minute of "
    }

    if (min.includes("-")) {
        minuteArr = min.split("-");
        if (minuteArr.length != 2) return "";
        const start = Number.parseInt(minuteArr[0]);
        const end = Number.parseInt(minuteArr[1]);
        if ((start >= end) || (start>59) || (end>59)) return "";
        result = " every " + result + "from "+start+" through "+end;
        return result;
    }

    minuteArr = min.split(",");

    if (minuteArr.length == 1) {
        if (Number.parseInt(min) > 0 && Number.parseInt(min)<32)
            result = result + Number.parseInt(min);
        else
            result = "";
    }
    else {
        let val = 0;
        for (let i=0; i<minuteArr.length; ++i) {
            val = Number.parseInt(minuteArr[i]);
            if (val<0 || val>59) return "";
            if (i == minuteArr.length-1) {
                result = result + "and " + val;
            }
            else {
                result = result + val+ (i===minuteArr.length-1 ? ", " : " ");
            }
        }
    }

    return result;
}