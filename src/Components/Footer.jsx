import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <>
           <footer className='relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-while bg-gray-800 sm:px-20'>
                <section className='text-lg'>
                   Copyright {year} | All right reserved
                </section>
           </footer>
        </>
    )
}

export default Footer;