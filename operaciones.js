const fs = require("fs");

const register = (name, age, type, color, disease) => {
  const appointment = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  appointment.push({ name, age, type, color, disease });

  fs.writeFileSync("citas.json", JSON.stringify(appointment, null, '\t'));
};

const read = () => {
  const read_appointment = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  console.log(read_appointment);
};

module.exports = { register, read };
