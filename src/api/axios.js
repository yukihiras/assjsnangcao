// nơi cấu hình base cho axios
import axios from "axios";

//khởi tạo cấu hình axios cho toàn bộ project
const apiAxios = axios.create({
  baseURL: "https://62a2a7905bd3609cee5775f4.mockapi.io/",
});

export default apiAxios;
