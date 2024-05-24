// footer component


import { FaInstagramSquare,FaFacebook,FaLinkedin,FaTwitter} from "react-icons/fa";

export default function Footer():React.ReactElement{

    return(
        <footer className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% min-h-40 w-full flex items-center flex-col p-5">
          <span className="break-words">Designed by Rahul Saini</span>
          <div className="flex mt-5 space-x-4">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare color="red" size={20} /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook color="green" size={20}/></a>
            <a href="https://www.linkedin.com/in/rahul-saini-440745270/" target="_blank" rel="noopener noreferrer"><FaLinkedin color="black" size={20}/></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaTwitter color="blue" size={20} /></a>
            </div>
        </footer>
    )
}