export class StoreInfo {
    // name: string="";
    // logo:string="";
    estblishDate=Date.now();
    totalInvestment=10000000;
    // services:string[]=[];

    constructor(public name:string,public logo="", public services:string[])
    {
        // this.name=name;
    }
} 
