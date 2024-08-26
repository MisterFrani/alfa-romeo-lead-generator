import { apis } from "../modules/request";

export const searchCities = (params) => {

    let uri = "/communes";
    if (params) {
        uri += `?${params.toString()}`;
        
    }

    return apis.geoGov(uri)

}