import axios from "axios";

export default function log(stack, level, pkg, msg) {
  axios.post("http://20.244.56.144/evaluation-service/logs", {
    stack,
    level,
    package: pkg,
    message: msg,
  })
  .then(res => console.log("Log submitted:", res.data))
  .catch(err => console.error("Logging error:", err));
}