class Employee {
    constructor(name, salary, hireDate){
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }
    getName(){
        console.log(this.name.toUpperCase);
    }
    getSalary(){
        console.log(this.salary.toUpperCase);
    }
    getHireDate(){
        console.log(this.hireDate.toUpperCase);
    
}
    class Manager extends Employee{
        jobDescription(){
            console.log("Manage Sales Assciates, so as to maintain and/or increase productivity and sales");
        }
    }
    class Designer extends Employee{
        yearsExperience(){
            console.log("20 years");
        }
    }
    class SalesAssociate extends Employee{
        degreeCompleted(){
            console.log("Masters Degree");
        }
    }

let m = new Manager("Joe", "$50,000", "Sep. 11th 1996", jobDescription());
console.log(m.jobDescription());

let d = new Designer("Malcom", "$60,000", "Jan. 5th 2008", yearsExperience());
console.log(d.yearExperience());

let s = new SalesAssociate("Haley", "$40,000", "June 10th 2012", degreeCompleted());
console.log(s.degreeCompleted());
