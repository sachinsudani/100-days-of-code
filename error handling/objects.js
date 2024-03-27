// const job = {
//   title: "Software Engineer",
//   company: "Google",
// };

// console.log(new Date().toUTCString());

class Job {
  constructor(title, company, salary) {
    this.title = title;
    this.company = company;
    this.salary = salary;
  }
}

const developer = new Job("Software Engineer", "Google", 100000);
console.log(developer);
