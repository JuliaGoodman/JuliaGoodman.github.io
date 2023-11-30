// Problem 1
const employees = [
    {
      firstName: "Sam",
      department: "Tech",
      designation: "Manager",
      salary: 40000,
      raiseEligible: true,
    },
    {
      firstName: "Mary",
      department: "Finance",
      designation: "Trainee",
      salary: 18500,
      raiseEligible: true,
    },
    {
      firstName: "Bill",
      department: "HR",
      designation: "Executive",
      salary: 21200,
      raiseEligible: false,
    },
  ];
  
  console.log(`Problem 1: ${JSON.stringify(employees)}`);
  
  // Problem 2
  const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees,
  };
  
  console.log(`Problem 2: ${JSON.stringify(company)}`);
  
  // Problem 3
  employees.push({
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false,
  });
  
  console.log(`Problem 3: ${JSON.stringify(employees)}`);
  
  // Problem 4
  let totalSalary = 0;
  company.employees.forEach((e) => {
    totalSalary += e.salary;
  });
  
  console.log(`Problem 4 Total Salary: ${totalSalary}`);
  
  // Problem 5
  function updateSalary() {
    company.employees.forEach((e) => {
      if (e.raiseEligible) {
        e.salary = e.salary + e.salary * 0.1;
        e.raiseEligible = false;
      }
    });
  }
  
  updateSalary();
  
  console.log(`Problem 5 Updated Salary: ${JSON.stringify(employees)}`);
  
  // Problem 6
  const workFromHome = ["Anna", "Sam"];
  
  company.employees.forEach((e) => {
    if (workFromHome.includes(e.firstName)) {
      e.workFromHome = true;
    }
  });
  
  console.log(`Problem 6 Updated Work From Home: ${JSON.stringify(employees)}`);