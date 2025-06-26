import axios from "axios";

export default function Register() {
  const handleRegister = async () => {
    const payload = {
      email: "22p31a0553@acet.ac.in",
      name: "Potti Priyanka",
      mobileNo: "9553161427",
      githubUsername: "PriyankaPotti553",
      rollNo: "22P31A0553",
      accessCode: "NFwgRT",
    };

    try {
      const response = await axios.post(
        "http://20.244.56.144/evaluation-service/register",
        payload
      );
      console.log("✅ Registration Success:", response.data);
      alert("Check console for clientID and clientSecret");
    } catch (error) {
      console.error("❌ Registration Failed:", error.message);
      alert("Registration failed — check console.");
    }
  };

  return <button onClick={handleRegister}>Register</button>;
}