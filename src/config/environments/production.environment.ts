import ApiConfig from "../../models/api-config.model";


const ProductionApiConfig: ApiConfig = {
  BASE_URL: 'http://10.0.2.2:8080/',
  REQUEST_TIMEOUT: 500000
};

export default ProductionApiConfig;