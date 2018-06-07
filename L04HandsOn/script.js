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
}
    class Manager extends Employee{
        constructor(name, salary, hireDate, jobDescription){
            super(name, salary, hireDate)
            this.jobDescription = jobDescription;
        }
        getJobDescription(){
            console.log("Managers help"+" "+this.jobDescription);
        }
    }
    class Designer extends Employee{
        constructor(name, salary, hireDate, yearsExperience){
            super(name, salary, hireDate)
            this.yearsExperience = yearsExperience;
        }
        getYearsExperience(){
            console.log("This Designer has"+" "+ this.yearsExperience +" "+"experience.");
        }
    }
    class SalesAssociate extends Employee{
        constructor(name, salary, hireDate, degreeCompleted){
            super(name, salary, hireDate)
            this.degreeCompleted = degreeCompleted;
        }
        getDegreeCompleted(){
            console.log("This Sales Associate has a"+" "+this.degreeCompleted);
        }
    }

let m = new Manager("Joe", "$50,000", "Sep. 11th 1996", "Main sales rep productivity");
console.log(m);
console.log(m.getJobDescription());

let d = new Designer("Malcom", "$60,000", "Jan. 5th 2008", "20 years");
console.log(d);
console.log(d.getYearsExperience());

let s = new SalesAssociate("Haley", "$40,000", "June 10th 2012", "Masters Degree");
console.log(s);
console.log(s.getDegreeCompleted());
