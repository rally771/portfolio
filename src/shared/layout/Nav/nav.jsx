export default function Nav() {
  return (
    <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-xl font-semibold text-gray-900">
          Yashwith Poojary
        </div>
        <div className="flex gap-8">
          <a href="#home" className="text-gray-900 hover:text-gray-600 transition">
            Home
          </a>
          <a href="#about" className="text-gray-900 hover:text-gray-600 transition">
            About
          </a>
          <a href="#work" className="text-gray-900 hover:text-gray-600 transition">
            Work
          </a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-gray-900 hover:text-gray-600 transition">
            {/* <Github size={20} /> */}
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-600 transition">
            {/* <Linkedin size={20} /> */}
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-600 transition">
            {/* <Twitter size={20} /> */}
          </a>
        </div>
      </nav>

  )
}
