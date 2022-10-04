import { IConfiguration, Stage, TStage } from "./configurations.interface";
import Dev from "./dev.configurations";
import Staging from "./staging.configurations";
import Prod from "./prod.configurations";

const configurations = (env?: TStage): IConfiguration => {
  let result: IConfiguration;
  switch (env) {
    case Stage.prod:
      result = Prod();
      break;
    case Stage.staging:
      result = Staging();
      break;
    default:
      result = Dev()
  }
  return result;
};

export default configurations;
