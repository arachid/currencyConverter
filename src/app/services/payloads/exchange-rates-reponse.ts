export interface ExchangeRatesResponse {
    rates: {
        [key: string]: number
    },
    base: string,
    date: string
}
