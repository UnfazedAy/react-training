const client = {
  id: "1234",
  age: 25,
  BMI: 1.5,
  condition: {
    mass: 80,
    height: 105,
  },
  setBMI(mass: number, height: number): void {
    this.BMT = mass / (height * height);
  },
};

const { id }: { id: string } = client;
const {
  condition: { mass, height },
}: { condition: { mass: number; height: number } } = client;
