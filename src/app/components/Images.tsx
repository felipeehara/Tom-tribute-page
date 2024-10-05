import { Buttons } from "./Buttons";
import Image, { StaticImageData } from 'next/image';
import TomHoland from '@/app/img/tomholand.jpg';
import TomHoland2 from '@/app/img/tomholand2.webp';
import TomHoland3 from '@/app/img/tomholand3.jpg';

export const Images = () => {
    return (
        <div className="flex items-center flex-col ">
            
                <Buttons text={'Galeria'}/>
           
            
                <div className="md:flex md:flex-row">
                    <ImageStandard img={TomHoland} alt='tom'/>
                    <ImageStandard img={TomHoland2} alt='tom'/>
                    <ImageStandard img={TomHoland3} alt='tom'/>
                </div>
                
            
        </div>
    )
}
interface ImgProps {
    img: StaticImageData; 
    alt: string;
}


export const ImageStandard: React.FC<ImgProps> = ({img, alt}) => {
    return(
        <div className="flex items-center">
            <div className='w-[300px] h-[350px] shrink-0 flex justify-center
                            '>
                <Image 
                src={img} 
                alt={alt} 
                width={300}
                height={400}
                style={{ objectFit: "cover" }}
                className="border-gray-500 border-4 p-0 m-0"
                />
            </div>
        </div>   
        
)
}

