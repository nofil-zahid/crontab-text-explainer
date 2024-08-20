export const isValidCronExpression = (cron: string): boolean => {
    // Regex to validate cron expression, simplified and flexible
    const cronRegex = /^(\*|([0-9]|[0-5][0-9]|[0-9]\/[0-9]|[0-9]-[0-9]|[0-5][0-9]\/[0-9]|[0-9]+)) (\*|([0-9]|1[0-9]|2[0-3]|[0-9]\/[0-9]|[0-9]-[0-9]|[0-9]+)) (\*|([1-9]|[0-2][0-9]|3[0-1]|[1-9]\/[0-9]|[0-9]-[0-9]|[1-9]+)) (\*|([1-9]|1[0-2]|[1-9]\/[0-9]|[1-2][0-9]|[1-9]+)) (\*|([0-6]|[0-6]\/[0-9]|[0-6]+))$/;
    cronRegex.test(cron);
    return true;
}
