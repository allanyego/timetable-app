function signIn(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        username,
        firstName: "alfonse",
        lastName: "sayole",
        speciality: ["chemistry", "math"],
        title: "mr",
        gender: "male",
        email: "alfonse@mail.com",
      });
    }, 1600);
  });
}

function addStaff({ firstName, lastName, username, email, speciality, title, gender }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        firstName,
        lastName,
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
