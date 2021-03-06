export const validateFields = ({ name, email, phone }) => {
  if (name === "") return false;
  else if (email === "") return false;
  else if (phone === "" || phone.length < 10 || phone.length > 13) return false;
  return true;
};
export const validateWithDataBase = ({ employees, name, email, phone }) => {
  const isValid = !employees.EMPLOYEES.map((e) => {
    if (e.NAME === name.trim()) {
      alert("Name Already exists");
      return false;
    } else if (e.EMAIL === email.trim()) {
      alert("Email Already exists");
      return false;
    } else if (e.PHONE === phone.trim()) {
      alert("Phone Already exists");
      return false;
    }
    return true;
  }).some((e) => e === false);
  return isValid;
};
