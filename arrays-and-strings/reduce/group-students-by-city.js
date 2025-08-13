const students = [
  { name: "Anna", city: "Warszawa", grade: 4.5 },
  { name: "Piotr", city: "Krakow", grade: 3.0 },
  { name: "Kasia", city: "Warszawa", grade: 5.0 },
  { name: "Marek", city: "Gdansk", grade: 4.0 },
  { name: "Zofia", city: "Krakow", grade: 4.0 },
  { name: "Tomasz", city: "Warszawa", grade: 3.5 },
];

const groupStudentsByCity = (arrPar) => {
  const initialState = {};
  const groupedStudents = arrPar.reduce((acc, curr) => {
    const { name, city, grade } = curr;
    if (!acc[city]) {
      acc[city] = [];
      // acc[city].push({ name, city, grade });
    }
    acc[city].push(curr);
    return acc;
  }, initialState);
  return groupedStudents;
};

const groupedData = groupStudentsByCity(students);
console.log(groupedData);
