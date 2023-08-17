
const Error = ({children}) => {
    return (
        <div className="bg-red-600 text-white text-center p-2 font-bold mb-2 rounded-lg">
            <p>{children}</p>
        </div>
    )
}

export default Error
