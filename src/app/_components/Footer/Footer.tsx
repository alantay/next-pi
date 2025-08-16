import Image from "next/image";
import Logo from "../Logo";
const Footer = () => {
  return (
    <footer className="relative bg-gray-100 p-10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-9 md:gap-3">
        <div className="flex flex-col md:col-span-3">
          <Logo className="text-purple-500" />
          <span className="text-sm italic">
            "Trying stuff.
            <br /> &nbsp;Breaking stuff. <br />
            &nbsp;Learning stuff."
          </span>
        </div>
        <div className="flex flex-col text-sm font-medium md:col-span-2">
          <div className="font-semibold text-purple-500">NAVIGATION</div>
          <ul>
            <li className="mt-2">
              <a
                href="/about"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </a>
            </li>
            <li className="mt-1">
              <a
                href="/blog"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                Blog
              </a>
            </li>
            <li className="mt-1">
              <a
                href="/contact"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-sm font-medium md:col-span-2">
          <div className="font-semibold text-purple-500">SOCIALS</div>
          <div className="mt-2 flex gap-2">
            <a href="https://github.com/alantay" target="_blank ">
              <Image
                src="/github-icon.svg"
                width={20}
                height={20}
                alt="Visit my Github"
              />
            </a>
            <a href="https://www.linkedin.com/in/tay-alan" target="_blank ">
              <Image
                src="/linkedin-icon.svg"
                width={20}
                height={20}
                alt="Vist my Linkedin"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col text-sm font-medium md:col-span-2">
          <div className="font-semibold text-purple-500">CONTACT</div>
          <div className="flex">
            <ul className="mt-2">
              <li>
                <a href="mailto:lun.tay.work@gmail.com" className="flex gap-2">
                  <Image
                    src="/mail-icon.svg"
                    width={20}
                    height={20}
                    alt="contact me via email"
                  />
                  <span>lun.tay.work@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:93656675" className="mt-1 flex gap-2">
                  <Image
                    src="/phone-icon.svg"
                    width={20}
                    height={20}
                    alt="contact me via phone"
                  />
                  <span>93656675</span>
                </a>
              </li>
            </ul>
            <Image
              src="/slippers.png"
              width={259}
              height={169}
              alt=""
              className="absolute top-0 right-0 hidden xl:block"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
