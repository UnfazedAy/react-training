class Employee {
  startShift(): void {
    console.log('Employee start to shift')
  }
  endShift(): void {
    console.log('Employee shift has ended')
  }
}

class Mechanic extends Employee{
  startShift(): void {
    console.log('mechanic start to shift')
  }
  endShift(): void {
    console.log('mechanic shift has ended')
  }
}

const employee = new Employee();
employee.startShift()
employee.endShift()

const mechanic = new Mechanic()
mechanic.startShift()
mechanic.endShift()
