import { socialArray } from "@/data/home-page/social";
import React from "react";
import { JSX } from "react";

type SocialLinkItemProps = {
  logo: JSX.Element;
  name: string;
  link: string;
};

export const SocialLinkItem: React.FC<SocialLinkItemProps> = ({
  logo,
  name,
  link,
}) => {
  return (
    <div className="flex flex-row text-center max-h-12 m-4 bg-black p-3 rounded-lg items-center justify-start">
      <div className="w-1/5 h-full">
        {React.cloneElement(logo, { className: "h-full w-full" })}
      </div>
      <div className="flex flex-row">
        <a href={link}>{name}</a>
      </div>
    </div>
  );
};

export const SocialLinks: React.FC = () => {
  return (
    <section className="social-links-section flex flex-col">
      {socialArray.map(({ id, ...props }) => (
        <SocialLinkItem key={id} {...props} />
      ))}
    </section>
  );
};
