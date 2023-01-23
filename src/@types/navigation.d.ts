import { CarDTO } from "~/dtos/CarDTO";
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      CarDetails: {car: CarDTO};
      Scheduling: undefined;
      SchedulingDetails: undefined;
      SchedulingComplete: undefined;
    }
  }
}
