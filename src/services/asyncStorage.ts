import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key: string, value: unknown) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.error(e)
  }
}

export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    console.error(e)
  }
}
