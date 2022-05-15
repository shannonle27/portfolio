
import resume from '../pdf/ShannonLeResume.pdf';

function About() {
  return (
    <section className="min-h-[50vh] bg-gradient-to-r from-[#3d23ff] to-[#ff2362] text-white flex justify-center flex-col py-20 text-xl">
      <div className="text-right max-w-6xl mx-auto w-full px-4">
      <h3 className="lowercase font-bold text-6xl mb-10">A quick overview...</h3>
      <div>
        <h4 className="font-medium">Frontend</h4>
        <p>ReactJS, NextJS, HTML, CSS, SASS, Tailwind, Bootstrap</p>
      </div>

      <div className="my-4">
        <h4 className="font-medium">Backend</h4>
        <p>C#, .NET, Ruby on Rails, Javascript, Python, Swift</p>
      </div>

      <div>
        <h4 className="font-medium">Other</h4>
        <p>Git, Azure Devops</p>
      </div>
      
      <div className="mt-10">
        <a className="bg-gray-600 text-white font-bold rounded-full py-4 px-6 hover:bg-white hover:text-gray-600 hover:shadow-lg uppercase" href={resume} download="">Download Resume</a>
      </div>
      
    </div>
    </section>
  );
}

export default About;