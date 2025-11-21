import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-md">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex space-x-4">
                        <Link
                            to="/"
                            className={`px-4 py-4 ${
                                isActive("/")
                                    ? "border-b-2 border-blue-500 text-blue-600"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                        >
                            🏠 Trang chủ
                        </Link>
                        <Link
                            to="/todos"
                            className={`px-4 py-4 ${
                                isActive("/todos")
                                    ? "border-b-2 border-blue-500 text-blue-600"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                        >
                            📝 Todos
                        </Link>
                        <Link
                            to="/about"
                            className={`px-4 py-4 ${
                                isActive("/about")
                                    ? "border-b-2 border-blue-500 text-blue-600"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                        >
                            ℹ️ Giới thiệu
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="py-8">{children}</main>
        </div>
    );
}

export default Layout;
