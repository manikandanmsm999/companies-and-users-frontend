import { Coordinates } from "./Coordinates";

export class Company{
    constructor(
        public companyId:String,
        public companyName:String,
        public companyAddress:String,
        public coordinates:Coordinates
    ){}
}