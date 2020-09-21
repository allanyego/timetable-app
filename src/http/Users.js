function signIn(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        username,
        firstName: "alfonse",
        lastName: "sayole",
        speciality: ["chemistry", "math"],
        title: "mr",
      });
    }, 1600);
  });
}

function addStaff({ username, email, speciality, title, gender }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        username,
        email,
        title,
        speciality,
        gender,
      });
    }, 1600);
  });
}

export { signIn, addStaff };
