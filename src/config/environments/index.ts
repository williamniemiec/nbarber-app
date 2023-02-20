import ProductionApiConfig from "./production.environment";
import DevelopmentApiConfig from "./development.environment";


const environments = {
  PRODUCTION: ProductionApiConfig,
  DEVELOPMENT: DevelopmentApiConfig
}

export default environments;