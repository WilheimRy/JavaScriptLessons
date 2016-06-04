/**
 * Created by wmd000 on 4/06/2016.
 */

function A() {
    this.sayhehe=function () {
        console.log("Hehe jikexueyuan");
    }
}

function max() {

}



A.prototype.sayHello=function () {
    console.log("Hello JS");
}
A.sayHi=function () {
    console.log("static Hello");
}

var a=new A();
a.sayHello();
A.sayHi();

function B() {

}
B.prototype=new A();

var b= new B();
b.sayHello();

//B.sayHi();
b.sayhehe();