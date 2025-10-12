import React from 'react';

function Banner() {
  return (
    <section>
      <div className="max-w-7xl mx-auto mt-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-700">Hello, I'm Yashwith,</p>
          <h1 className="text-6xl lg:text-7xl font-bold text-blue-950 leading-tight">
            Full Stack
            <br />
            Developer
          </h1>
          <p className="text-lg text-gray-700">based in Mumbai.</p>
          <button className="mt-8 px-8 py-3 bg-yellow-300 text-gray-900 font-medium rounded hover:bg-yellow-400 transition border-2 border-gray-900">
            Resume
          </button>
        </div>

        {/* Right Content - Profile Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 flex gap-1">
              <div className="w-6 h-6 border-2 border-gray-900 rounded-sm"></div>
              <div className="w-6 h-6 border-2 border-gray-900 rounded-sm"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-1 h-8 bg-gray-900 rotate-12"></div>
              ))}
            </div>
            
            {/* Profile circle */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="w-full h-full rounded-full border-4 border-gray-900 overflow-hidden bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
