interface ButtonProps{
   children?: React.ReactNode;
   onClick?: () => void;
   className?: string;
   title?: string;
   label?: string;
   rounded?: boolean;
}

const Button = ({onClick, children, className, title, label, rounded} : ButtonProps) => {
    return (
        <div className="flex gap-2">            
            <div 
                title={title}
                onClick={onClick}
                className={`${rounded ? 'rounded-full' : ''} w-fit p-2 hover:bg-[#80808083]  transition-all duration-300 ease-in-out cursor-pointer select-none flex items-center gap-2 ${className}`}>
                {label && <p className="font-bold">{label}</p>}
                {children}
            </div>
        </div>
    );
};
export { Button };