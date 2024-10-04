import { StaticImageData } from "next/image";
import Image from 'next/image'

interface awardsProps {
    img: StaticImageData;
    title: string;
    alt: string;
    year: string;
}
export const AwardsProps:React.FC<awardsProps> = ({img,title,year,alt}) => {
    return(
        <div className=''>
                <div className="flex justify-center mt-5">
                    <Image src={img} alt={alt} className="rounded-full h-32 w-32 text-center"/>
                </div>
                <div className="flex justify-center  flex-col items-center">
                    <div className="text-gray-400 font-bold text-lg">
                        {title}
                    </div>
                    <div className="text-gray-500 text-lg">
                        {year}
                    </div>

                </div>
               
        </div>
    );
}