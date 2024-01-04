type registerDetails = {
  username: string;
  password: string;
  email: string;
};

type loginDetails = {
  username: string;
  password: string;
};

const baseUrl = "http://localhost:3000";

export const register = async (registerDetails: registerDetails) => {
  try {
    const response = await fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerDetails),
    });

    const data = await response.json();
    return { data, status: response.status };
  } catch (error) {
    return { data: null, status: 500 };
  }
};

export const login = async (loginDetails: loginDetails) => {
  try {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    });

    const data = await response.json();
    return { data, status: response.status };
  } catch (error) {
    return { data: null, status: 500 };
  }
};
