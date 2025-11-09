import React from 'react';

function Work() {
  return (
   <section className='work'>
      <div className='max-w-7xl mx-auto mt-20 items-center'> 
      <h3 className="text-yellow font-poppins font-bold text-2xl">Skills</h3>
      <ul>
        <li>
          <h4 className="font-poppins font-semibold text-lg">Programming Languages & Frameworks</h4>
          <p className="font-poppins text-sm mt-2">
            JavaScript, React.js, Node.js, HTML5, CSS3, Redux, Express.js
          </p>
        </li>
        <li>
          <h4 className="font-poppins font-semibold text-lg">Databases</h4>
          <p className="font-poppins text-sm mt-2">
            MongoDB, MySQL
          </p>
        </li>
        <li>
          <h4 className="font-poppins font-semibold text-lg">Tools & Platforms</h4>
          <p className="font-poppins text-sm mt-2">
            Git, Docker, Jenkins, AWS, Webpack, Babel
          </p>
        </li>
        <li>
          <h4 className="font-poppins font-semibold text-lg">CMS & Automation</h4>
          <p className="font-poppins text-sm mt-2">
            SDL Tridion, WordPress, Selenium
          </p>
        </li>
        <li>
          <h4 className="font-poppins font-semibold text-lg">Soft Skills</h4>
          <p className="font-poppins text-sm mt-2">
            Project Management, Client Communication, Problem-Solving, Team Collaboration
          </p>
        </li>
      </ul>
      </div>
   </section>
  );
}

export default Work;
