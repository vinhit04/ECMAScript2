function Heading({ title, subtitle }) {
    return (
        <div className="text-center mb-10 group">
            <h1
                className="
                    text-4xl font-extrabold text-gray-800 
                    transition-all duration-300 
                    group-hover:text-blue-500 
                    group-hover:scale-105
                "
            >
                {title}
            </h1>
            <div
                className="
                    mx-auto mt-2 h-1 w-16 bg-blue-400 
                    rounded-full 
                    transition-all duration-300 
                    group-hover:w-28 group-hover:bg-blue-500
                "
            ></div>
            {subtitle && (
                <p
                    className="
                        mt-3 text-lg text-gray-600 
                        transition-all duration-300
                        group-hover:text-gray-800
                    "
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}

export default Heading;
