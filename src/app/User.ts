export class User{
    constructor(
        public userId:string,
        public firstName:string,
        public lastName:string,
        public email:string,
        public designation:string,
        public dob:string,
        public active:boolean
    ){}
}