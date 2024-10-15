import { Avatar } from "@nextui-org/react";
import {
  RiTwitterXLine,
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
} from "react-icons/ri";

const socials = [
  {
    name: "Twitter",
    href: "https://twitter.com/sergeichestakov",
    Icon: RiTwitterXLine,
  },
  {
    name: "GitHub",
    href: "https://github.com/sergeichestakov",
    Icon: RiGithubLine,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sergeichestakov/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Email",
    href: "mailto:me@sergei.com",
    Icon: RiMailLine,
  },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col">
          <div className="flex gap-4 items-center flex-row">
            <Avatar
              name="Sergei Chestakov"
              src="/sergeichestakov.jpg"
              size="lg"
            />
            <div className="flex gap-2 items-center flex-col">
              <p className="text-4xl">Hi, I'm Sergei</p>
              <p className="text-md">Software Engineer & Creator</p>
            </div>
          </div>

          <div className="flex gap-4 items-center justify-center flex-row w-full">
            {socials.map((social) => {
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75"
                >
                  <social.Icon
                    key={social.name}
                    style={{ fontSize: "1.25em" }}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
