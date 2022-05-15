
import AAPC from '../img/aapc.png';
import Freelance from '../img/freelance.png';
import Portfolio from '../img/portfolio.png';
import Pratt from '../img/pratt.png'

function Projects() {
 const cards = [
   {
     name: 'AAPC | Business',
     image: AAPC,
     alt: 'AAPC Website Preview',
     link: 'https://www.aapc.com/business',
     description: 'Maintained legacy site using C#, .Net, Javascript and CSS. Built new site using React, NextJS, GraphQL and TailwindCSS.',
     tags: ['C#', '.Net', 'React', 'Javascript', 'NextJS', 'GraphQL', 'TailwindCSS']
   },
   {
    name: 'Pratt International',
    image: Pratt,
    alt: 'Pratt International Website Preview',
    link: 'https://www.hosspratt.com/',
    description: 'Content, design and navbar changes using Ruby on Rails hosted on Heroku.',
    tags: ['Ruby on Rails', 'Heroku', 'CSS']
  },
   {
    name: 'AAA Fair Credit',
    image: Freelance,
    alt: 'AAA Fair Credit Website Preview',
    link: 'https://faircredit.org/',
    description: 'Layout, content and navbar changes using Wix.',
    tags: ['HTML/CSS', 'Wix', 'Javascript']
  },
  {
    name: 'Portfolio',
    image: Portfolio,
    alt: 'Portfolio Website Preview',
    link: 'https://shannonle27.github.io/portfolio',
    description: 'Static portfolio site using React, CreateReactApp and TailwindCSS.',
    tags: ['React', 'TailwindCSS']
  },
  {
    name: 'Tuesday.com',
    image: {Portfolio},
    alt: 'Tuesday.com Website Preview',
    link: 'https://shannonle27.github.io/portfolio',
    description: 'Personal project mocking Monday.com using React, NextJS and TailwindCSS.',
    tags: ['React', 'NextJS', 'TailwindCSS']
  },
  {
    name: 'iOS Apps',
    image: {Portfolio},
    alt: 'iOS Apps Website Preview',
    link: 'https://apps.apple.com/us/developer/shannon-le/id1478216052',
    description: 'Personal project, live iOS Apps made with Swift, React Native and Google Firebases.',
    tags: ['Swift', 'React Native', 'Google Firebase']
  },
  ]

  return (
    <section className="min-h-[50vh] py-20 px-4">
      <div className="max-w-6xl mx-auto text-left w-full ">
      <h3 className="font-bold text-6xl text-white mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#3d23ff] to-[#ff2362]">projects</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <a href={card.link} target="_blank" className="m-auto max-w-sm rounded-xl overflow-hidden hover:shadow-lg bg-white h-full text-gray-700 border-2 hover:border-purple-600">
        <img className="w-full h-56 object-cover" src={card.image} alt={card.alt}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{card.name}</div>
          <p className="text-gray-600">
            {card.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {card.tags.map((tag) => (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
          ))}
        </div>
      </a>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Projects;