import { cron_expression_item_detail } from "../json/cron_expression";

const isInRange = (num: string, range: number[]) => (Number.parseInt(num)>=range[0] && Number.parseInt(num)<=range[1])

const checkOrder = (num1: string, num2: string) => (Number.parseInt(num1) < Number.parseInt(num2)) 

const hyphenCheck = (str: string, range: number[]) => {
    if (str.includes('--') || str.startsWith("-") || str.endsWith("-")) return false;
    const numArr = str.split('-');
    return numArr.length==2 && checkOrder(numArr[0], numArr[1]) && numArr.length === 2 && isInRange(numArr[0], range) && isInRange(numArr[1], range)
}

const commaCheck = (str: string, range: number[]): boolean => {
    if (str.includes(',,') || str.startsWith(",") || str.endsWith(",")) return false;

    const numArr = str.split(",");

    const num = [numArr[0]];
    for (let i=1; i<numArr.length; i++) {
        if (!isInRange(numArr[i], range) || num.includes(numArr[i])) {
            return false;
        }
        num.push(numArr[i]);
    }

    return true;
}

// const alphabeticalExpressionItem = (str: string, type: string, range: number[]) => {
//     console.log("item", str)
//     console.log("range", range)
//     console.log('type', type)

//     if (type === 'day-of-month') {
//         console.log("object")
//     }
//     else if (type === 'day-of-week') {
//         console.log('ksl')
//     }

//     return str;
// }

const checkValidItem = (str: string, type: string): boolean => {
    const range = cron_expression_item_detail.filter(c => c.id===type)[0].detail.range;

    // if (type==="day-of-month" || type==='day-of-week') {
    //     str = alphabeticalExpressionItem(str, type, range)
    // }

    for (const item of str) {
        const ascii = item.charCodeAt(0);
        if (!((ascii>=48 && ascii<=57) || [42,44,45,47].includes(ascii))) return false;
    }
    
    if (str.length===0 || str==="") return false;
    if (str==="*") return true;

    if (str.startsWith("*/")) {
        if (str.slice(2).length <= 2) {
            return isInRange(str.slice(2), range);
        }
        else if (str.includes("-")) {
            return hyphenCheck(str.slice(2), range);
        }
        else if (str.includes(',')) {
            return commaCheck(str.slice(2), range)
        }
    }

    if (str.includes("-")) {
        return hyphenCheck(str, range);
    }
    else if (str.includes(',')) {
        return commaCheck(str, range)
    }
    
    if(![',', '-', '/', '*'].some(ch => str.includes(ch))) {
        return isInRange(str, range)
    }
    
    return false;
}

export const isValidCronExpression = (cron: string): boolean => {
    const [minute, hour, day_of_month, month, day_of_week] = cron.split(" ");
    let count=0;
    return checkValidItem(minute, cron_expression_item_detail[count++].id) && checkValidItem(hour, cron_expression_item_detail[count++].id) && checkValidItem(day_of_month, cron_expression_item_detail[count++].id) && checkValidItem(month, cron_expression_item_detail[count++].id) && checkValidItem(day_of_week, cron_expression_item_detail[count++].id) ;
}