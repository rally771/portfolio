import React from 'react';

function About() {
  return (
    <section className='about'>
      <div className="max-w-7xl mx-auto mt-20 items-center">
        <h2 className='text-yellow font-poppins font-bold text-5xl'>
          about.
        </h2>
        <p className='font-poppins font-normal text-lg mt-6 max-w-3xl leading-7'>
          Experienced React Developer with 6.5+ years of expertise in building secure, responsive, and scalable web applications. Proficient in React js, JavaScript, Node.js, HTML, CSS, and MongoDB. Skilled at managing projects, maintaining client communication, and ensuring high-quality deliverables. Specialized in CMS platforms (SDL Tridion, WordPress) and automation tools for efficiency improvements.
        </p>
      </div>
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-yellow font-poppins font-bold text-2xl">Work Experience</h3>
          <ul className="mt-4 space-y-4">
        <li>
          <h4 className="font-poppins font-semibold text-lg">Full Stack Developer</h4>
          <p className="font-poppins text-sm text-gray-600">Infosys June 2025 - Present</p>
          <p className="font-poppins text-sm mt-2">
            Developed and maintained scalable web applications using React.js. Collaborated with cross-functional teams to deliver high-quality solutions.
          </p>
        </li>
        <li>
          <h4 className="font-poppins font-semibold text-lg">Frontend Developer</h4>
          <p className="font-poppins text-sm text-gray-600">Accenture July 2019 - June 2025 </p>
          <p className="font-poppins text-sm mt-2">
            Built responsive user interfaces and optimized performance for various web applications. Worked closely with designers to implement pixel-perfect designs.
          </p>
        </li>
          </ul>
        </div>
        <div>
          <h3 className="text-yellow font-poppins font-bold text-2xl">Additional Experience</h3>
          <ul className="mt-4 space-y-4">
        <li>
          <h4 className="font-poppins font-semibold text-lg">Intern</h4>
          <p className="font-poppins text-sm text-gray-600">CandidCooper | 2018 - 2019</p>
          <p className="font-poppins text-sm mt-2">
            Assisted in developing internal tools and gained hands-on experience with JavaScript and Node.js.
          </p>
        </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
