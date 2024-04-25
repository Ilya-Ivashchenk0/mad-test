export const setStorageItem = (name: string, data: any): void => {
  localStorage.setItem(name, JSON.stringify(data))
}

export const getStorageItem = <T>(name: string): T | null => {
  const dataString = localStorage.getItem(name)
  if (dataString) {
    return JSON.parse(dataString) as T
  }
  return null
}

export const deleteAllStorage = (): void => {
  localStorage.clear()
}
