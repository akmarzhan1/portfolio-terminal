import { useState } from "react";
import { LinksType, NavigationType } from "../screens/types";

const Navigation = ({
  onPress,
}: {
  onPress: (page: NavigationType) => void;
}) => {
  const links: LinksType[] = [
    {
      title: "home",
      inActiveIcon: `
                        <svg
                            aria-hidden="true"
                            class="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            ></path>
                        </svg>
                        `,
      activeIcon: `
                        <svg
                            aria-hidden="true"
                            class="w-6 h-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                            ></path>
                        </svg>
                        `,
    },
    {
      title: "about me",
      inActiveIcon: `
                        <svg
                            aria-hidden="true"
                            class="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                        </svg>
                        `,
      activeIcon: `
                        <svg
                            aria-hidden="true"
                            class="w-6 h-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"
                            ></path>
                        </svg>
                        `,
    },
    {
      title: "work",

      inActiveIcon: `
                        <svg
                            aria-hidden="true"
                            class="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                            ></path>
                        </svg>
                        `,

      activeIcon: `
                        <svg
                            aria-hidden="true"
                            class="w-6 h-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                        <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                     
                        </svg>
                        `,
    },
  ];

  const [activeLink, setActiveLink] = useState<NavigationType>("home");

  return (
    <div className="relative flex items-center px-2 overflow-hidden bg-transparent border-[1.5px] border-white h-16 rounded-2xl">
      <nav className="flex items-center justify-center gap-2">
        {links.map((link, index) => (
          <span
            onMouseEnter={() => console.log("wh")}
            onClick={() => {
              setActiveLink(link.title);
              onPress(link.title);
            }}
            className="grid w-16 h-16 grid-cols-1 grid-rows-1"
            key={index}
          >
            <span className="sr-only">{link.title}</span>
            <div
              className="col-[1/1] row-[1/1] flex items-center justify-center w-16 h-16"
              dangerouslySetInnerHTML={{ __html: link.inActiveIcon }}
            ></div>
            <div
              className={`col-[1/1] row-[1/1] flex items-center justify-center w-16 h-16 transition-opacity duration-300 ${
                activeLink === link.title
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              dangerouslySetInnerHTML={{ __html: link.activeIcon }}
            ></div>
          </span>
        ))}
      </nav>

      <div
        className={`absolute w-6 h-8 transition-all duration-300 bg-[#adff00] rounded-full -bottom-4 left-7 hover:bg-white ${
          activeLink == "about me"
            ? "left-[100px]"
            : activeLink == "work"
            ? "left-[172px]"
            : ""
        }`}
      >
        <div
          style={{ boxShadow: "0 10px 0 #adff00" }}
          className="absolute w-5 h-5 bg-transparent -left-4 bottom-1/2 rounded-br-3xl"
        ></div>
        <div
          style={{ boxShadow: "0 10px 0 #adff00" }}
          className="absolute w-5 h-5 bg-transparent -right-4 bottom-1/2 rounded-bl-3xl"
        ></div>
      </div>
    </div>
  );
};

export default Navigation;
