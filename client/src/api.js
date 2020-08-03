import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  saveGoal: function() {
    return axios.post("auth/newgoal");
  },
 
};