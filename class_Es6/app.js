class automobile {
    constructor(n,m,c,t){
        this.name =n;
        this.model =m;
        this.color=c;
        this.type=t;
        }
        start(){
            console.log(this.name+" ready for drive");
        }
        opendoor(){
            console.log(this.name+" door is open");
        }
        closedoor(){
            console.log(this.name+" door is close");
        }
        drive(){
            console.log(this.name+" has been drived 1.7Km");
        }
}


//here i am  making an object and calling automobile1 with properties and methods;

let automobile1=new automobile("Honda",2012,"red","auto");
console.log(automobile1);
automobile1.start();
automobile1.opendoor();
automobile1.closedoor();
automobile1.drive();

// here i am making child classes of automobile;
 class car extends automobile{
        constructor(n,m,c,t,w,s,d){
            super(n,m,c,t);
            this.weigth=w;
            this.speed=s;
            this.doors=d;
        }
 }
//here i am  making an object and calling car1 with properties and methods;
 let car1=new car ("Civic",2017,"red","auto","1222kg","100-km/h","stylish");
 console.log(car1);

 class truck extends automobile{
    constructor(n,m,c,t,w,s,d){
        super(n,m,c,t);
        this.weigth=w;
        this.speed=s;
        this.doors=d;
    }

}

//here i am  making an object and calling car1 with properties and methods;
let truck1=new truck ("abc",2017,"black","auto","12999kg","109-km/h","simple");
console.log(truck1);

//here i am  making an object and calling bus1 with properties and methods;
class bus extends automobile{
    constructor(n,m,c,t,w,s,d){
        super(n,m,c,t);
        this.weigth=w;
        this.speed=s;
        this.doors=d;
    }

}

let bus1=new bus ("redbus",2022,"red","auto","12999kg","220-km/h","auto");
console.log(bus1);

