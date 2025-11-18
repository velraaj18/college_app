'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const apiUrl = "http://localhost:5213/api/user";


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const response = await fetch(`${apiUrl}/login`, {
      method : "POST",
      headers : { "Content-Type" : "application/json"},
      body : JSON.stringify(data)
    })
    const resultData = await response.json();

    if(!response.ok){
      setError(resultData.message || "Login Failed. Please try again");
    } else{
      const {token, result} = resultData;
      localStorage.setItem("token", token);
      localStorage.setItem("userData", JSON.stringify(result));
      window.location.href = "/";
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[400px]">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 underline">
            Register
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login