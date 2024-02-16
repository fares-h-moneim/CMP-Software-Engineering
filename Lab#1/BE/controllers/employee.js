const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const { id } = req.params;
  const employeeIndex = employee.findIndex((emp) => emp.id === id);
  if (employeeIndex === -1) {
    return res.status(404).json({ message: 'Employee not found' });
  }
  employee.splice(employeeIndex, 1);
  res.status(200).json({ message: 'Employee deleted' });
};

// TODO
exports.createEmployee = async (req, res, next) => {
  const { name, id } = req.body;
  if(!name || !id){
    return res.status(400).json({ message: 'Please provide name and id' });
  }
  employee.push({ id, name });
  res.status(201).json({ message: 'Employee created' });
};
