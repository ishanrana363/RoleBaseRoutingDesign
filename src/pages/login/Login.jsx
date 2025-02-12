import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [loading,setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const navigate = useNavigate();

    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            let res = await axios.post("https://role-base-routing-backend.vercel.app/api/v1/login",formData);
            setLoading(false)
            if(res.data.role==="admin"){
                navigate("/admin-dashboard");
                setFormData({email:"",password:""});
            }else if (res.data.role==="user"){
                navigate("/user-dashboard");
                setFormData({email:"",password:""});
            }
        } catch (error) {
            toast.error("Login fail")
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-lg w-96"
            >
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled = {loading}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg  transition duration-300"
                >
                    {
                        loading ? "loading..." : "Login"
                    }
                </button>
            </form>
            <Toaster position="top-center"></Toaster>
        </div>
    );
}
/*  */