import Image from "next/image";
import Logo from "../Logo";
const Footer = () => {
  return (
    <footer className="bg-footer relative p-10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-9 md:gap-0">
        <div className="flex flex-col justify-center md:col-span-3">
          <Logo className="text-footer-title" />
        </div>
        <div className="flex flex-col text-sm font-medium md:col-span-2">
          <div className="text-footer-title font-semibold">NAVIGATION</div>
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
          <div className="text-footer-title font-semibold">SOCIALS</div>
          <div className="mt-2 flex gap-2">
            <a href="https://github.com/alantay" target="_blank ">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z"
                  fill="#372521"
                  className="fill-footer-icon"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/tay-alan" target="_blank ">
              <svg
                width="20"
                height="20"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-footer-icon"
                  d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z"
                  fill="#372521"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col text-sm font-medium md:col-span-2">
          <div className="text-footer-title font-semibold">CONTACT</div>
          <div className="flex">
            <ul className="mt-2">
              <li>
                <a href="mailto:lun.tay.work@gmail.com" className="flex gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 11L4 6H20L12 11Z"
                      fill="black"
                      className="fill-footer-icon"
                    />
                    <path
                      d="M4 5H20C20.55 5 21 5.45 21 6V18C21 18.55 20.55 19 20 19H4C3.45 19 3 18.55 3 18V6C3 5.45 3.45 5 4 5Z"
                      stroke="black"
                      className="stroke-footer-icon"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 6.5L12 12L21 6.5"
                      className="stroke-footer-icon"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>lun.tay.work@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+6593656675" className="mt-1 flex gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.23 15.26L16.69 14.97C16.3914 14.9349 16.0886 14.968 15.8046 15.0667C15.5206 15.1654 15.2626 15.3273 15.05 15.54L13.21 17.38C10.3714 15.9359 8.0641 13.6286 6.62004 10.79L8.47004 8.94001C8.90004 8.51001 9.11004 7.91001 9.04004 7.30001L8.75004 4.78001C8.69356 4.2921 8.45951 3.84204 8.0925 3.51561C7.7255 3.18918 7.25121 3.00921 6.76004 3.01001H5.03004C3.90004 3.01001 2.96004 3.95001 3.03004 5.08001C3.56004 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z"
                      fill="black"
                      className="fill-footer-icon"
                    />
                  </svg>
                  <span>+65 9365 6675</span>
                </a>
              </li>
            </ul>
            <Image
              src="/slippers.png"
              width={259}
              height={169}
              alt=""
              className="absolute top-0 right-0 hidden xl:block dark:brightness-75"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
