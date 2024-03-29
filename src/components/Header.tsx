import { faFacebook, faXTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faFolderOpen} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    const [ isActive, setIsActive ] = useState(false)
    const [showNav, setShowNav] = useState(true);
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrollPos]);
  
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = scrollPos > currentScrollPos;
  
      setScrollPos(currentScrollPos);
      setShowNav(visible);
    };

    if (isActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    console.log(isActive);
    


  return (
    <>
    <header className={`flex fixed top-0 text-lightest-slate bg-gradient-to-r from-firstD to-secondD justify-between w-full pt-6 pb-6 z-50 items-center px-5 Saira transition ${showNav ? '' : 'hide'}`}>
        <div>
        <a href="https://github.com/PiusOzegbe" target="blank">
          <div className='flex space-x-2 items-center'><span className={`iconHeader hover:bg-sec-color`}><FontAwesomeIcon icon={faGithub} className='fa-xl' /></span> <span className='text-xl sm:text-3xl pacifico'>PiusFolio</span></div>
          </a>
        </div>
        <div className={`nav_menu ${isActive ? 'active' : ''}`}>
         <nav>
            <ul className="flex space-y-7 items-center flex-col lg:flex lg:flex-row lg:space-x-10 lg:space-y-0">
              {isActive ? <FontAwesomeIcon icon={faFolderOpen} className='fa-md' /> : ""}
              <li onClick={()=> setIsActive(false)} className={`nav_link transition`}><HashLink to='#home'>Home</HashLink></li>
              <li onClick={()=> setIsActive(false)} className={`nav_link transition`}><HashLink to='#about'>About</HashLink></li>
              <li onClick={()=> setIsActive(false)} className={`nav_link transition`}><HashLink to='#projects'>Projects</HashLink></li>
              <li onClick={()=> setIsActive(false)} className={`nav_link transition`}><HashLink to='#contact'>Contact</HashLink></li>
            </ul>
        </nav>

          </div>
          <div className='flex space-x-3 items-center'>
          <div className={`text-slate-300 hover:text-white social_icon  transition`}><a href="https://twitter.com/pius_ozegbe" target="blank"><FontAwesomeIcon icon={faXTwitter} className='fa-md' /></a></div>
          <div className={`text-slate-300 hover:text-white social_icon  transition`}><FontAwesomeIcon icon={faFacebook} className='fa-md' /></div>
          <div className={`text-slate-300 hover:text-white social_icon  transition`}><a href="https://www.linkedin.com/in/pius-ozegbe/" target="blank"><FontAwesomeIcon icon={faLinkedin}className='fa-md'  /></a></div>
          </div>
          <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={()=> setIsActive(!isActive)}>
            <span className={`menu bg-white `}></span>
            <span className={`menu bg-white `}></span>
            <span className={`menu bg-white `}></span>
          </div>
          <div className={`overlay ${isActive ? 'onOverlay': ""}`}>
          </div>
      </header>
      </>
  )
}

export default Header