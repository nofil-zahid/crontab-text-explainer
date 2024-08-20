export interface InputParams {
    value: string,
    setValue: (value: string) => void,
    setHasError: (value: boolean) => void,
    hasError: boolean,
}