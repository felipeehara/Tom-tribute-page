import Image from 'next/image';
import logoInstagram from '@/app/img/instagram.png';
import logoGithub from '@/app/img/github2.png';
export const Footer = () => {
    return(
       
            <div className="bg-black w-full h-28 mt-10 flex justify-end items-center gap-3 ">
                <h1 className="text-yellow-400 border-red-400 border-r-2 pr-3">By Felipe Ehara</h1>
                <div className='flex gap-3 mr-3'>
                <a href="https://www.instagram.com/felipe.eharaa/" className='' target="_blank"> 
                <Image src={logoInstagram} alt="Logo do Instagram" style={{ width: '40px', height: 'auto' }} />
                </a>
                <a href="https://github.com/felipeehara" target="_blank">
                <Image src={logoGithub} alt="Logo do GitHub" style={{ width: '40px', height: 'auto' }} />
                </a>
                </div>    
            </div>
     
    )
}