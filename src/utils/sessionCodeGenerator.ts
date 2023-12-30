export const generateRandomSessionCode = (): string => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 12; i++) {
    if (i !== 0 && i % 4 === 0) {
      code += "-";
    }
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
};