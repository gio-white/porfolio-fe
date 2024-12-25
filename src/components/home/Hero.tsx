import { SocialLinks } from "./ui/SocialLinkHome";


const Hero = () => {
  return (
    <section className="hero-section">
      <h1>Name</h1>
      <img src="/globe.svg" alt="" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus placeat temporibus nam aperiam voluptatem maiores vitae ex excepturi rem. Voluptates dignissimos maxime non quisquam, vel enim qui rerum delectus possimus!</p>
      <div className="social-links">
        <SocialLinks />
      </div>
    </section>
  );
};

export default Hero;
