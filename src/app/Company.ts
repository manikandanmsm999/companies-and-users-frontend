import { Coordinates } from "./Coordinates";

export class Company{
    constructor(
        public companyId:string,
        public companyName:string,
        public companyAddress:string,
        public coordinates:Coordinates
    ){}
}