interface ButtonProps{
   children?: React.ReactNode;
   onClick?: () => void;
   className?: string;
}

const Button = ({onClick, children, className} : ButtonProps) => {
    return (
        <div 
            onClick={onClick}
            className={`p-2 hover:bg-opacity-20 hover:bg-black transition-all duration-300 ease-in-out cursor-pointer select-none ${className}`}>
            {children}
        </div>
    );
};
export { Button };