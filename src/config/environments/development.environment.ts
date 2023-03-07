import ApiConfig from "../../models/api-config.model";


const DevelopmentApiConfig: ApiConfig = {
  BASE_URL: 'http://10.0.2.2:8080/api',
  REQUEST_TIMEOUT: 10000
};

export default DevelopmentApiConfig;