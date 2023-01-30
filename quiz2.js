// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

// class Worker {
//     construction(name, part, time) {
//         this.name = name;
//         this.part = part;
//         this.time = time;
//     }
// }

// class FullTimeEmployee extends Worker {
//     construction(name, part, time){
//         super(name, part, time);
//         payment = () => {
//             time * 10000;
//         }
//     }
// }

// class PartTimeEmployee extends Worker {
//     construction(name, part, time){
//         super(name, part, time);
//         payment = () => {
//             time * 8000;
//         }
//     }
// }


// const sohee = new FullTimeEmployee();
// sohee.payment();

// const doeun = new PartTimeEmployee();
// doeun.payment();


class Employee {
    construction(name, department, hoursPerMonth, payRate){
        this.name = name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }
    calculatePay() {
        return this.hoursPerMonth * this.payRate;
    }
}

class FullTimeEmployee extends Employee {
    static PAY_RATE = 10000;
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
    }
}
class PartTimeEmployee extends Employee {
    static PAY_RATE = 8000;
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
    }
}

const sohee = new FullTimeEmployee('소희', 's/w', 30);
const doeun = new PartTimeEmployee('도은', 's/w', 20);
console.log(sohee.calculatePay());
console.log(doeun.calculatePay());