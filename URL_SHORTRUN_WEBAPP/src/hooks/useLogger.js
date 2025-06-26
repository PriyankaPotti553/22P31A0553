import log from "../logger";

export default function useLogger() {
  return (stack, level, pkg, msg) => {
    log(stack, level, pkg, msg);
  };
}