export const getItems = (key: keyProps) => {
  if (key) {
    const data = localStorage?.getItem(key) ?? ""
    return JSON.parse(data)
  }
}

export const setItems = (key: keyProps, value: string | number | undefined) => {
  if (value) {
    localStorage?.setItem(key, JSON.stringify(value))
  }

  return
}

export const currencyConvert = (amount: number, currency: string, code: string) => {
  if (amount) {
    return amount.toLocaleString(currency, { style: 'currency', currency: code });
  }
  return
}

export const getPosition = (): Promise<GeolocationPosition> => {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};


type keyProps = "getRecipeById" | "amount"