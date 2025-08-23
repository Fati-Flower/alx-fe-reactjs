import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  // Validation schema
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 chars").required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Mock API request
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log("User registered (Formik):", data);
      alert("User registered successfully with Formik!");
      resetForm();
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed!");
    }
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="max-w-sm mx-auto p-4 border rounded shadow space-y-4">
          <h2 className="text-xl font-bold">User Registration (Formik + Yup)</h2>

          <div>
            <label className="block mb-1">Username</label>
            <Field
              type="text"
              name="username"
              className="w-full border px-2 py-1 rounded"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full border px-2 py-1 rounded"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <Field
              type="password"
              name="password"
              className="w-full border px-2 py-1 rounded"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
