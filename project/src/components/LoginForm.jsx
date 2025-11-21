import { useNavigate } from "react-router-dom";

function LoginForm() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        // Xử lý đăng nhập xong thì chuyển qua trang dashboard
        navigate("/dashboard");
    };

    return <button onClick={handleSubmit}>Login</button>;
}
export default LoginForm;
