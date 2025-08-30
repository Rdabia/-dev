/*
Bu bölümde class, inheritance, private fields, getter/setter, method overriding ve static kullanacaksınız.

4.1 İstemler (Requirements)

Person sınıfı yazın:

Alanlar: name (public), #age (private)
constructor(name, age)
get age() ve set age(value)
Negatif veya mantıksız değerler atanmaya çalışılırsa konsola uyarı verin, değeri değiştirmeyin
introduce() → "Merhaba, ben <name>. <age> yaşındayım."
Student sınıfı yazın (Person’dan extends):

Ek alan: #studentNo (private)
constructor(name, age, studentNo)
introduce() metodunu override edin →
"Merhaba, ben <name>. <age> yaşındayım. Öğrenci Numaram: <studentNo>."
Instructor sınıfı yazın (Person’dan extends):

Ek alan: #branch (private)
introduce() override →
"Merhaba, ben <name>. <age> yaşındayım. Branşım: <branch>."
Person, Student ve Instructor class'ları için statik propertyler ekleyin:

Amaç: Class'ların oluşturulmuş tüm instance'larının toplam sayısını saklamak ve yazdırmak.
static classnameCount → oluşturulmuş toplam Person instance'larının sayısını tutar (Derste değinmedik ama metodlar dışında da statik propertyler oluşturulabilir.)
Başlangıç değeri olarak 0 verilmeli.
Constructor içerisinde instance oluşturulduysa değer 1 artırılmalı.
static count() → classnameCount'u döndürür.
4.2 Örnek Kullanım (Beklenen Senaryo)

const p1 = new Person("Bahadır", 21);
const s1 = new Student("Arda", 20, "2025001");
const s2 = new Student("Esma", 19, "2025002");
const i1 = new Instructor("Arca", 20, "Fullstack Development");

console.log(Person.count());
// 4

console.log(Student.count());
// 2

console.log(Instructor.count());
// 1
*/


class Person {
    static personCount = 0;
    #age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        Person.personCount++;
    }
   
    static count(){
        return Person.personCount;
    }
    get age() {
        return this.#age;
    }
    set age(value) {
        if (value === undefined || value === null || value === "" || isNaN(value) || parseInt(value) < 0) {
            throw new Error("Geçersiz değer!");
        }
        this.#age = value;
    }
    introduce() {
      console.log(
        `Merhaba, ben ${this.name}, ${this.#age} yaşındayım.`
      );
    }
  }

  class Student extends Person {
        static studentCount = 0;
       
        #studentNo;
        constructor(name, age, studentNo) {
            super(name, age);
            this.studentNo = studentNo;
            Student.studentCount++;
        } static count(){
            return Student.studentCount;
        }
        get studentNo() {
            return this.#studentNo;
        }
        set studentNo(value) {
            if (value === undefined || value === null || value === "" || value.length < 5 || parseInt(value) < 0) {
            throw new Error("Geçersiz değer!");}
            this.#studentNo = value;
        }
        introduce() {
            console.log(`Merhaba, ben ${this.name}, ${this.age} yaşındayım. Öğrenci Numaram: ${this.#studentNo}.`);
        }
    }
    class Instructor extends Person {
        static instructorCount = 0;
        static count(){
            return Instructor.instructorCount;
        }
        #branch;
        constructor(name, age, branch) {
            super(name, age);
            this.branch = branch;
            Instructor.instructorCount++;
        }

        get branch() {
            return this.#branch;
        }
        set branch(value) {
            if (value === undefined || value === null || value === "") {
            throw new Error("Geçersiz değer!");
           }
            this.#branch = value;
        }

        introduce() {
            console.log(`Merhaba, ben ${this.name}, ${this.age} yaşındayım. Branşım: ${this.#branch}.`);
        }
    }

const p1 = new Person("Bahadır", 21);
const s1 = new Student("Arda", 20, "2025001");
const s2 = new Student("Esma", 19, "2025002");
const i1 = new Instructor("Arca", 20, "Fullstack Development");

console.log(Person.count());
// 4

console.log(Student.count());
// 2

console.log(Instructor.count());
// 1
  
p1.introduce();
s1.introduce();
s2.introduce();
i1.introduce();