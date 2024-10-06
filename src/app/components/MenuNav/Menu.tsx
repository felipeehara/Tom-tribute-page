"use client"
import { useRef, useState } from 'react';
import Image from 'next/image'
import menuIMG from '@/app/img/MENUWHITE2.png'
import Link from 'next/link';

interface menuProps {
    mt?: number;
}

export const Menu: React.FC<menuProps> = (mt) => {
    const menu = useRef<HTMLDivElement>(null);
    const backGround = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const styleMenu = 'border-b-2 border-b-gray-600 block mb-1 text-white md:text-yellow-400 ';

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
        if (backGround.current) {
            backGround.current.classList.toggle('backdrop-blur', !isMenuOpen);
        }
    };

    const closeMenu = () => {  //Função que quando clicar fora do menu ele fecha (mobile).
        console.log('computando clique');
        setIsMenuOpen(!isMenuOpen);  
    }
    

  

    return (
        <div className='fixed md:static transition-opacity w-full md:flex md:justify-center'>
            {isMenuOpen && ( 
                <div ref={backGround} className={`w-full h-screen absolute transition-opacity duration-300 backdrop-blur`} onClick={closeMenu}></div>
            )}
            <div className='w-10 absolute'>
                <button className="toggle md:hidden z-50 m-2 absolute" onClick={handleClick}>
                    <Image src={menuIMG} alt='logo-MENU' />
                </button>
                <div 
                    ref={menu} 
                    className={`h-screen w-64 bg-gradient-to-t from-black to-gray-400 top-0 left-0 pt-8 transform transition-transform duration-300 
                        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
                        md:translate-x-0 md:relative md:flex md:w-full md:justify-center md:mt-8 md:h-10 md:bg-none`}
                        
                    >
                    
                    <ul className="flex flex-col text-left p-3 gap-4 md:flex-row xl:p-0">
                        <li><Link href="/" className={styleMenu}>INICIO</Link></li>
                        <li><Link href="./Films" className={styleMenu}>FILMES</Link></li>
                        <li><Link href="./Galery" className={styleMenu}>GALERIA</Link></li>
                        <li><Link href="./Career" className={styleMenu}>CARREIRA</Link></li>
                        <li><Link href="./Awards" className={styleMenu}>PREMIAÇÕES</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
