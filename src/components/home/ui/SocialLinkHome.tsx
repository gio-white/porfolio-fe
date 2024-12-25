import { socialArray } from "@/data/home-page/social";
import { JSX } from "react";

type SocialLinkItemProps = {
  logo: JSX.Element;
  name: string;
  link: string
}

export const SocialLinkItem: React.FC<SocialLinkItemProps> = ({logo, name, link}) => {
  return (
    <>
      {logo}
      <h3>{name}</h3>
      <h4>{link}</h4>
    </>
  );
};

export const SocialLinks: React.FC = () => {
  return (
    <section className="social-links-section max-w-fit">
      {socialArray.map(({id, ...props}) => (
        <SocialLinkItem key={id} {...props}/>
      ))}
    </section>
  );
};
