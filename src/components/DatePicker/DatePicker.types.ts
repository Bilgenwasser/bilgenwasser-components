export interface DatePickerProps {
    date: Date
    setDate: (date: Date) => void
    minDate?: Date
    maxDate?: Date
}
