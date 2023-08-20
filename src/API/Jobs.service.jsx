import axios from "./api";

const token = localStorage.getItem("token");

const JobService = {
  //* JOB GET | REQUEST
  jobGet: async () => {
    try {
      const data = await axios.get("/job", {
        authorization: token,
      });
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  //* JOB POST | REQUEST
  jobPost: async (body) => {
    try {
      const data = await axios.post("/job", body);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};

export default JobService;
