function Button(props) {
    const dattour = () => {
        alert(`Bạn đã đặt tour: ${props.label}`);
    };

    return (
        <button
            onClick={dattour}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
            {props.label}
        </button>
    );
}

export default Button;
