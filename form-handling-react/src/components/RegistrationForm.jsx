import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    setError("");

    try {
      // Mock API request (simulate)
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("User registered:", data);
      alert("User registered successfully!");
    } catch (error) {
      console.error("Error:", error);
      setError("Registration failed!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto p-4 border rounded shadow space-y-4"
    >
      <h2 className="text-xl font-bold">User Registration (Controlled)</h2>

      {error && <p className="text-red-500">{error}</p>}

      <div>
        <label className="block mb-1">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;

