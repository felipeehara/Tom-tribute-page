interface TextProps {
    text:string;
}

export const Buttons: React.FC<TextProps> = ({text}) => {
    return (
        <div className="w-full">
           <button className="text-yellow-400 bg-black w-full h-16 mt-12 text-2xl bg-opacity-65">
            {text}</button>     
        </div>
    );
}