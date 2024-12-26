import { FlipWordsHome } from "./ui/FlipWordsHome";
import { HeroParallaxHome } from "./ui/HeroParallaxHome";
import { SocialLinks } from "./ui/SocialLinkHome";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start justify-around min-h-screen p-8 lg:p-16 bg-gray-900">
      
      {/* Left Side */}
      <div className="flex flex-col items-center">
        {/* Image */}
        <div className="w-40 h-60 mb-4 lg:w-48 lg:h-48 bg-gray-300 overflow-hidden">
          <img src="/globe.svg" alt="" className="object-cover w-full h-full" />
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <SocialLinks />
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-3/5 mt-8 lg:mt-0 text-center lg:text-left space-y-6">
        <FlipWordsHome />

        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-red-900">
          Hi, I’m [Your Name]
        </h1>
        <p className="text-lg lg:text-xl text-gray-600">
          I’m a [Your Profession] passionate about creating amazing digital
          experiences. From crafting beautiful web designs to developing robust
          software, I thrive on solving problems and delivering value through
          technology.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;