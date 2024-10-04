"use client"
import { useRef } from 'react';
import Image from 'next/image'
import menuIMG from '@/app/img/MENUWHITE2.png'

interface menuProps {
    mt?:number;
  }

export const Menu: React.FC<menuProps> = (mt) => {
    const menu = useRef<HTMLDivElement>(null);
    const backGround = useRef<HTMLDivElement>(null);

    const styleMenu = 'border-b-2 border-b-gray-600 block mb-1 text-white md:text-yellow-400';

    const handleClick = () => {
        if (menu.current) {
            menu.current.classList.toggle('hidden');
            backGround.current?.classList.toggle('backdrop-blur');
        }
      };

    

    return (
        <div className='fixed md:static'>
            <div ref={backGround} className='w-screen h-screen absolute md:h-10 md:w-20'></div>
            <div className='w-10  absolute '>
                
                <button className="toggle md:hidden z-50 m-2 absolute "  onClick={handleClick}>
                    <Image src={menuIMG} alt='logo-MENU'/>
                </button>
                <div ref={menu} className="hidden h-screen w-64 bg-gradient-to-t from-black to-gray-400 top-0 left-0 pt-8
                                            md:bg-none md:w-screen md:flex md:justify-center md:mt-8 md:h-10">
                
                    <ul className="flex flex-col text-left p-3 gap-4 
                                md:flex-row xl:p-0">
                        <li><a href="/" className={styleMenu} >INICIO</a></li>
                        <li><a href="./Films"className={styleMenu}>FILMES</a></li>
                        <li><a href="./Galery" className={styleMenu}>GALERIA</a></li>
                        <li><a href="./Career" className={styleMenu}>CARREIRA</a></li>
                        <li><a href="./Awards" className={styleMenu}>PREMIAÇÕES</a></li>
                    </ul>
                </div>
            </div>
        </div> 
    );
}