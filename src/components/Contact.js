
import email from '../svg/email.svg';
import github from '../svg/github.svg';

function Contact() {
  return (
    <div className="max-w-6xl mx-auto text-left w-full my-20 px-4">
      <h3 className="font-bold text-6xl lowercase bg-clip-text  text-transparent bg-gradient-to-r from-[#3d23ff] to-[#ff2362]">Contact Me</h3>
      <div className="flex flex-row mt-8 items-baseline gap-6">
      <a
          href="https://github.com/shannonle27"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-[50px]" src={github} alt="Github" />
        </a>
        <a href="mailto:shannongle@gmail.com" rel="noopener noreferrer">
          <img className="w-[50px]" src={email} alt="Email" />
        </a>
      </div>
      
      <h6 className="mt-8">Copyright © {(new Date().getFullYear())} Shannon Le. All Rights Reserved.</h6>
    </div>
  );
}

export default Contact;