interface CustomButtonProps{
    children: React.ReactNode;
    className?:string,
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    children,
    className,
    onClick
}) => {
    return(
        <div onClick={onClick}
            className={`w-full py-4 bg-airbnb hover:bg-airbnb-dark text-white text-center rounded-xl transition cursor-pointer ${className}`}>
            {children}
        </div>
    )
}

export default CustomButton;