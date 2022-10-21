import axios from "axios"
import {
  TEST_NEW_DEEP_USERNAME,
  TEST_NEW_DEEP_PASSWORD
} from "react-native-dotenv"
const testNewDeep = axios.create({
  baseURL: "https://test.crowd.com",
  auth: { username: TEST_NEW_DEEP_USERNAME, password: TEST_NEW_DEEP_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
