interface CareerProps {
    text?: string;
    title?: string;
}

export const TextCareer:React.FC<CareerProps> = ({text}) => {
    
    return (
        <div className="text-white mx-5 mt-5 bg-black bg-opacity-65 
        xl:w-7/12 xl:bg-none xl:bg-opacity-0 md:mt-11">
            {text}
        </div>
    );
}

export const TitleCareer:React.FC<CareerProps> = ({title}) => {
    
    return (
        <div className="text-2xl text-gray-300 mx-8 mt-10">
            {title}
        </div>
    );
}