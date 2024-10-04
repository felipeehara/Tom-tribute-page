"use client";
import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface FilmsProps {
    title: string;
    img: StaticImageData | string;
    alt: string;
    desc: string;
}

export const MyComponent: React.FC<FilmsProps> = ({ title, img, alt, desc }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [maxLength, setMaxLength] = useState(150);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const renderDesc = () => {
    if (isLargeScreen || isExpanded || desc.length <= maxLength) {
      return desc;
    }
    return `${desc.substring(0, maxLength)}...`;
  };

  // Hook para verificar a largura da tela e definir maxLength
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsLargeScreen(width >= 1024);

      // Ajuste o maxLength conforme a largura da tela
      if (width >= 1200) {
        setMaxLength(300);
      } else if (width >= 768) {
        setMaxLength(200);
      } else {
        setMaxLength(150);
      }
    };

    handleResize(); // Verifica a largura inicial
    window.addEventListener('resize', handleResize); // Adiciona o listener de resize

    return () => {
      window.removeEventListener('resize', handleResize); // Limpa o listener
    };
  }, []);

  // Defina os valores fixos de width e height
  const imageWidth = 160; // Defina o valor fixo desejado
  const imageHeight = 260; // Defina o valor fixo desejado

  return (
    <div className='flex justify-center'>
      <div className='flex items-center justify-center flex-col mt-6 bg-black bg-opacity-65 xl:flex-row xl:w-[1200px] xl:justify-between'>
        <div>
          <div className='text-white text-2xl mb-4 text-gray-400 mx-3'>{title}</div>
        </div>
        <div className='flex flex-row-reverse md:w-10/12'>
          <div className='flex flex-row gap-3 mx-4 items-center xl:mx-0'>
            <div className='w-[160px] h-[260px] shrink-0 lg:w-[160px] lg:h-[260px] xl:ml-44 xl:text-center xl:flex xl:justify-center'>
              <Image
                src={typeof img === 'string' ? img : img.src}
                alt={alt}
                width={imageWidth} // Use o valor fixo
                height={imageHeight} // Use o valor fixo
                className='w-full h-full object-cover'
              />
            </div>
          </div>
          <div>
            <div className='text-white text-sm flex-grow xl:text-base xl:w-[500px] ml-5 items-center'>
              {renderDesc()}
              {!isLargeScreen && desc.length > maxLength && (
                <button
                  onClick={toggleExpanded}
                  className='text-blue-500 ml-2 '
                  style={{ touchAction: "manipulation" }}
                >
                  {isExpanded ? 'Ler menos' : 'Ler mais'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
