export const getJobs = async () => {
  try {
    const response = await fetch("http://localhost:4000/jobs");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
