import Image, { StaticImageData } from 'next/image';



interface FilmsProps {
    title: string;
    img: StaticImageData; 
    alt: string;
    desc: string;
}

export const Films: React.FC<FilmsProps> = ({ title, img, alt, desc }) => {
    
    return (
        <div className='flex justify-center'>
            <div className='flex items-center justify-center flex-col mt-6 bg-black bg-opacity-65
                            xl:flex-row xl:w-[1200px] xl:justify-between'>
                <div>
                    <div className='text-white text-2xl mb-4 text-gray-400 mx-3 '>{title}</div>
                </div>
                <div className='flex flex-row-reverse md:w-10/12'>
                    <div className='flex flex-row gap-3 mx-4 items-center 
                                    xl:mx-0'>
                        <div className='w-[160px] h-[260px] shrink-0
                                        lg:w-[160px] lg:h-[260px] xl:ml-44 xl:text-center xl:flex xl:justify-center'>
                            <Image 
                                src={img} 
                                alt={alt} 
                                className='w-full h-full object-cover' 
                            />
                        </div>
                    </div> 
                    <div>
                        <div className='text-white text-sm flex-grow
                                        xl:text-base xl:w-[500px] ml-5'>
                            {desc}
                        </div> 
                    </div>  
                </div>     
            </div>
        </div>
    );
};