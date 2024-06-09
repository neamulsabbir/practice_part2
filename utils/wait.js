"use server";

const wait = async () => {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), 10000);
  });
  return p;
};

export default wait;
