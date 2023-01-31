// 접근자 프로퍼티 (Accessor Property)
class Studunt {
    construction(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        // this.fullName = `${this.lastName} ${this.firstName}` // 생성자함수내에서 만들면 업데이트가 되지 않는다.
    }
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
    set fullName(value){
        console.log(value);
    }
}

const student = new Student('소희', '정');
student.firstName = '안나';
console.log(student.firstName);
console.log(student.fullName);
student.fullName = '김철수';