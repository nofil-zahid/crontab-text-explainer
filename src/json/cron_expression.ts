const expression = ["minute", "hour", "day-of-month", "month", "day-of-week"];

let count = 0;

export const cron_expression_item_detail = [

    {
        id: expression[count++],
        heading: 'MINUTES',
        detail:{
            '*': 'any value',
            ',': 'value list separator',
            '-': 'range of values',
            '/': 'step values',
            'range': [0,59]
        },
    },

    {
        id: expression[count++],
        heading: 'HOURS',
        detail:{
            '*': 'any value',
            ',': 'value list separator',
            '-': 'range of values',
            '/': 'step values',
            'range': [0,23]
        },
    },

    {
        id: expression[count++],
        heading: 'DAY OF MONTH',
        detail:{
            '*': 'any value',
            ',': 'value list separator',
            '-': 'range of values',
            '/': 'step values',
            'range': [1,31]
        },
    },

    {
        id: expression[count++],
        heading: 'MONTH',
        detail:{
            '*': 'any value',
            ',': 'value list separator',
            '-': 'range of values',
            '/': 'step values',
            'range': [1,12]
        },
    },

    {
        id: expression[count++],
        heading: 'DAY OF WEEK',
        detail:{
            '*': 'any value',
            ',': 'value list separator',
            '-': 'range of values',
            '/': 'step values',
            'range': [0,6]
        },
    },

]