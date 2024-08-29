interface InputProps {
    placeholder?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

const Input = ({ placeholder, label, onChange, value }: InputProps) => {
    return (
        <div className="w-full flex gap-4 items-center">
            {label && <p>{label}</p>}
            <input 
                defaultValue={value}
                type="text" 
                onChange={onChange} 
                placeholder={placeholder}
                className="bg-transparent focus:outline-none border-b p-1 w-full" />
        </div>
    );

};
export { Input };