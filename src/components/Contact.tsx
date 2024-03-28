import { faFacebook, faXTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faComment} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {motion} from "framer-motion"
import { useState } from "react"

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event: any) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "84fe58a8-0984-439f-acf4-9392944fb973");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='flex w-full justify-start items-start px-10 md:px-20 lg:px-40'>
    <motion.div className="mt-40 flex w-full flex-col items-center justify-start"
     initial= {{opacity: 0, y: 100}}
     whileInView={{opacity: 1, y: 0}}
     transition={{duration: 0.6}}
     viewport={{once: true}}
    >
        <div id='contact' className="flex items-center justify-start mb-10">
            <span className="text-sec-color mr-3 text-lg">04.</span> <span className="text-xl lg:text-2xl font-bold mr-5 text-lightest-slate">Contact Me</span> <hr className="w-0 sm:w-44 lg:w-72 border-slate" />
        </div>
        <div className="flex flex-col space-y-7 lg:space-y-0 lg:flex w-full lg:flex-row lg:justify-center lg:space-x-7">

            <div className={`bg-contact p-5 w-full flex space-x-5 gmailXsocial`}>
            <div className='iconAbout'><FontAwesomeIcon icon={faEnvelope} className='fa-lg text-sec-color' /></div>
            <div className='flex flex-col space-y-3'>
                <p className='text-xl font-semibold text-slate'>Email Me</p>
                <p className='text-lightest-slate text-clip  overflow-hidden'>piusozegbegmail.com</p>
            </div>
            </div>


            <div className={`bg-contact p-5 w-full flex space-x-5 gmailXsocial`}>
            <div className={`iconAbout`}><FontAwesomeIcon icon={faComment} className='fa-lg text-sec-color' /></div>
            <div className='flex flex-col space-y-2'>
                <p className='text-xl font-semibold text-slate'>Social Profiles</p>
                <div className='flex space-x-3 '>
                <a href=""><FontAwesomeIcon icon={faFacebook} className='text-lightest-slate hover:text-sec-color transition'  /></a>
                <a href="https://twitter.com/pius_ozegbe" target="blank"><FontAwesomeIcon icon={faXTwitter} className='text-lightest-slate hover:text-sec-color transition' /></a>
                <a href=""><FontAwesomeIcon icon={faInstagram} className='text-lightest-slate hover:text-sec-color transition' /></a>
                <a href="https://www.linkedin.com/in/pius-ozegbe/" target="blank"><FontAwesomeIcon icon={faLinkedin} className='text-lightest-slate hover:text-sec-color transition' /></a>
                <a href="https://github.com/PiusOzegbe" target="blank"><FontAwesomeIcon icon={faGithub} className='text-lightest-slate hover:text-sec-color transition' /></a>
                </div>
            </div>
            </div>

        </div>

        <form onSubmit={onSubmit} className={`bg-contact w-full grid grid-cols-2 gap-4 mt-10 formCont`}>
            <input type="text" placeholder='Your Name' name='name' className='bg-contact col-span-2 sm:col-span-1 px-5 py-2 text-sm outline-0' required />
            <input type="email" placeholder='Your Email' name='email' className='bg-contact col-span-2 sm:col-span-1 px-5 py-2 text-sm outline-0' required />
            <input type="text" placeholder='Subject' name='subject' className='bg-contact col-span-2 px-5 py-2 text-sm outline-0' />
            <textarea name='message' placeholder='Message' id="" cols={20} rows={5} className='bg-contact col-span-2 px-5 py-2 text-sm outline-0' required />
            <button className={`bg-sec-color w-36 mx-auto col-span-2 rounded py-2 formBtn`}>Send Message</button>
        </form>
        <span>{result}</span>
    </motion.div>
    </div>
  )
}

export default Contact