import { Link } from "react-router-dom";
import "../styles/Contact.css";
import networkPic from "../assets/network.png";

function Contact() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <Link to="/">
              <li>Inicio</li>
            </Link>
            <Link to="/about">
              <li>Sobre mim</li>
            </Link>
            <Link to="/skills">
              <li>Skills</li>
            </Link>
            <Link to="/curiosity">
              <li>Curiosidades</li>
            </Link>
            <Link to="/contact">
              <li id="li_contactpage">Contato</li>
            </Link>
          </ul>
        </nav>
      </header>
      <main>
        <section id="first_contact_section">
          <h1>Vamos nos conectar!</h1>
          <p>Você pode me encontrar nas seguintes nas redes sociais abaixo.</p>

          <img src={networkPic} id="networkPic" alt="" />

          <a
            href="https://www.linkedin.com/in/esdras-de-melo-motta/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="87"
              height="87"
              viewBox="0 0 87 87"
              fill="none"
              id="svgLinkedin"
            >
              <path
                d="M42.3899 0H44.6327C48.8911 0.17864 52.8641 0.84216 56.5517 1.99056C59.4645 2.89884 62.3807 4.1876 65.3005 5.85684C68.1314 7.47852 70.8163 9.49866 73.1983 11.7241C73.9616 12.4375 74.7214 13.2066 75.4777 14.0314C76.4997 15.1461 77.2119 15.9599 77.6144 16.4726C78.1283 17.128 78.9357 18.2712 80.0365 19.9021C81.0736 21.4385 81.8635 23.0585 82.6918 24.7063C83.7822 26.8766 84.6464 29.1276 85.2844 31.4592C86.2744 35.0784 86.8886 38.762 87 42.5239V44.5022C86.7808 50.4652 85.4845 56.63 82.8292 62.0066C82.0793 63.5291 81.3085 65.0899 80.4332 66.4802C76.8396 72.192 72.1897 76.8425 66.4837 80.4315C65.1247 81.2876 63.2977 82.2185 62.0119 82.8466C56.6474 85.4636 50.3556 86.8051 44.4761 87H42.503C35.8979 86.7999 29.0615 85.1156 23.2325 81.9436C22.2755 81.4233 21.1027 80.8543 19.9943 80.0957C18.1755 78.851 17.0352 78.0489 16.5735 77.6893C14.9118 76.3999 12.8934 74.5068 11.397 72.8451C9.42268 70.6562 7.66586 68.3002 6.12654 65.7772C5.91658 65.435 5.6927 65.0244 5.4549 64.5453C4.93116 63.4943 4.27344 62.2903 3.8715 61.4133C1.4703 56.1794 0.1914 50.2442 0 44.5196V42.456C0.10672 39.7648 0.3683 37.3862 0.78474 35.3203C1.14144 33.5472 1.79046 30.9442 2.46036 29.0354C3.3234 26.5733 4.40742 24.4888 5.54886 22.2807C6.35274 20.7269 7.30626 19.3888 8.29632 17.9864C8.9784 17.0224 9.6918 16.1089 10.4365 15.2459C11.3854 14.1462 12.1864 13.2727 12.8395 12.6254C13.3139 12.1556 14.0917 11.448 15.1728 10.5026C15.9755 9.80084 16.791 9.15588 17.6192 8.56776C18.8825 7.66992 20.3771 6.52152 21.8648 5.75766C22.845 5.25422 23.3415 4.99902 23.3543 4.99206C29.1537 1.83396 35.8179 0.25056 42.3899 0ZM21.0244 23.3369C20.8121 25.2277 21.4032 26.785 22.7975 28.0088C25.3483 30.2482 29.8741 29.747 31.8037 26.9717C33.455 24.5966 32.6598 20.8974 30.1977 19.4706C26.7595 17.4748 21.5168 18.959 21.0244 23.3369ZM48.1823 37.932L48.1771 33.7508C48.1771 33.7314 48.1696 33.7128 48.1562 33.6991C48.1428 33.6854 48.1247 33.6777 48.1058 33.6777H37.9546C37.8885 33.6777 37.8549 33.7113 37.8537 33.7786L37.8102 64.8672C37.8102 64.8792 37.8148 64.8907 37.8229 64.8992C37.8311 64.9077 37.8422 64.9124 37.8537 64.9124L48.0727 64.9177C48.1446 64.9177 48.1806 64.8817 48.1806 64.8098C48.1864 59.3845 48.187 53.9603 48.1823 48.5373C48.1806 46.4389 48.1475 45.3862 49.0715 43.8062C49.7849 42.5871 50.7964 41.7855 52.106 41.4016C54.1453 40.803 56.8232 41.2432 57.9733 43.2164C58.9529 44.8955 59.1078 46.4789 59.113 48.6347C59.1235 54.0415 59.124 59.4378 59.1148 64.8237C59.1148 64.8472 59.1243 64.8698 59.1413 64.8864C59.1582 64.9031 59.1812 64.9124 59.2052 64.9124L69.4225 64.9142C69.4405 64.9142 69.4578 64.907 69.4705 64.8943C69.4832 64.8816 69.4904 64.8643 69.4904 64.8463C69.495 58.6948 69.4892 52.5509 69.473 46.4145C69.4672 44.2755 69.0931 42.206 68.3507 40.2062C66.8108 36.0632 63.8336 33.7647 59.5097 33.0791C57.2025 32.7126 54.9776 32.9834 52.8351 33.8917C50.8237 34.7426 49.3725 36.0963 48.325 37.9685C48.3166 37.9829 48.3038 37.9942 48.2884 38.0006C48.2731 38.007 48.256 38.0083 48.2399 38.0042C48.2237 38 48.2094 37.9907 48.199 37.9777C48.1886 37.9647 48.1828 37.9486 48.1823 37.932ZM31.9899 33.7229C31.9899 33.7109 31.9851 33.6994 31.9766 33.691C31.9682 33.6825 31.9567 33.6777 31.9447 33.6777H21.6543C21.6484 33.6777 21.6425 33.6789 21.637 33.6811C21.6315 33.6834 21.6265 33.6867 21.6223 33.691C21.6181 33.6952 21.6148 33.7001 21.6125 33.7056C21.6102 33.7111 21.6091 33.717 21.6091 33.7229V64.8689C21.6091 64.8749 21.6102 64.8808 21.6125 64.8862C21.6148 64.8917 21.6181 64.8967 21.6223 64.9009C21.6265 64.9051 21.6315 64.9085 21.637 64.9107C21.6425 64.913 21.6484 64.9142 21.6543 64.9142H31.9447C31.9567 64.9142 31.9682 64.9094 31.9766 64.9009C31.9851 64.8924 31.9899 64.8809 31.9899 64.8689V33.7229Z"
                fill="#007AB9"
              />
            </svg>
          </a>
          <a
            href="https://github.com/Esdrasmelo"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="84"
              height="83"
              viewBox="0 0 84 83"
              fill="none"
              id="svgGitHub"
            >
              <path
                d="M50.9769 61.106C53.1857 60.9147 55.4841 60.2688 57.5608 59.5014C62.6161 57.6335 65.9599 54.1707 67.5922 49.113C68.672 45.7642 69.0887 41.648 68.7146 38.1979C68.3427 34.7486 66.9844 31.6849 64.6397 29.0068C64.5904 28.9513 64.5762 28.8875 64.5971 28.8155C65.7337 25.0796 65.5836 21.4 64.1469 17.7766C64.119 17.706 64.071 17.6452 64.0088 17.602C63.9466 17.5587 63.873 17.5349 63.7974 17.5336C59.8637 17.4593 55.856 19.6603 52.713 21.8861C52.6488 21.9311 52.5779 21.9491 52.5002 21.9401C52.3061 21.9191 52.0649 21.8726 51.7766 21.8006C45.9388 20.3227 40.0673 20.1885 34.1622 21.3977C33.299 21.5748 32.438 21.7563 31.5793 21.9424C31.5031 21.9589 31.4336 21.9446 31.3709 21.8996C28.443 19.8336 23.8395 17.1735 20.1073 17.5696C20.0737 17.5729 20.0417 17.5854 20.0148 17.6057C19.988 17.6259 19.9673 17.6531 19.955 17.6844C18.4795 21.3332 18.3167 25.0436 19.4667 28.8155C19.4905 28.8965 19.4749 28.9685 19.4196 29.0315C16.8449 31.9962 15.4553 35.4253 15.2507 39.3187C15.0423 43.2976 15.6852 47.9675 17.4572 51.5616C20.6315 58.0003 27.2759 60.6942 34.0434 61.2141C34.2675 61.2321 34.3033 61.3236 34.151 61.4886C32.7621 63.016 31.9653 64.8149 31.7607 66.8854C31.7579 66.9141 31.7475 66.9416 31.7305 66.965C31.7136 66.9883 31.6908 67.0067 31.6644 67.0182C27.7665 68.7421 23.9268 68.5913 20.9877 65.5261C20.1589 64.6641 19.4487 63.3408 18.6871 62.3393C17.4774 60.7475 15.9078 59.7145 13.9782 59.2404C13.351 59.0851 11.5208 58.9815 11.178 59.6747C10.6852 60.6672 13.2614 61.9725 13.8237 62.4811C14.9064 63.4578 15.792 64.5891 16.4805 65.8749C16.4835 65.8794 16.7553 66.5111 17.2959 67.7699C19.227 72.2642 23.8283 73.8935 28.443 73.4412C29.4347 73.3437 30.4211 73.2026 31.4023 73.0181C31.4844 73.0016 31.5262 73.0361 31.5277 73.1216C31.5606 75.6497 31.577 78.1703 31.577 80.6834C31.577 82.9812 29.879 83.3052 28.0734 82.6706C18.3354 79.2475 10.0019 72.0346 5.13628 62.9267C-4.03498 45.7619 -0.717287 24.7218 13.4339 11.3514C24.5698 0.830181 40.9028 -2.77291 55.4192 2.21425C68.4794 6.7018 78.7461 17.5223 82.4177 30.8455C88.3429 52.347 77.1847 74.7442 56.3466 82.5266C55.3908 82.8821 54.6829 83.0374 54.2229 82.9924C52.9684 82.8664 52.3994 81.9054 52.4061 80.6721C52.4255 76.8612 52.4464 73.0548 52.4688 69.253C52.4845 66.379 51.855 63.5231 49.7851 61.4279C49.7703 61.4131 49.7599 61.3946 49.755 61.3742C49.7502 61.3539 49.7511 61.3326 49.7576 61.3127C49.7641 61.2929 49.776 61.2752 49.7919 61.2618C49.8079 61.2483 49.8272 61.2396 49.8478 61.2366C50.2227 61.1826 50.5991 61.139 50.9769 61.106Z"
                fill="#171515"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/_esdrasmotta/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="85"
              height="83"
              viewBox="0 0 85 83"
              fill="none"
              id="svgInstagram"
            >
              <g clip-path="url(#clip0_621_1119)">
                <path
                  d="M37.2744 0.291504C37.4457 0.412608 37.678 0.451452 37.9713 0.408037C38.0205 0.401182 38.0358 0.419463 38.017 0.462878C37.9982 0.504008 37.9736 0.537138 37.9431 0.562273C37.8798 0.621682 37.8704 0.687948 37.9149 0.761067C38.173 1.18836 38.5168 1.50711 38.9461 1.71733C39.7134 2.09436 40.1005 2.28516 40.1075 2.28973C42.5711 3.90064 45.0699 5.45101 47.6039 6.94082C47.6977 6.99566 47.7552 7.07678 47.7763 7.18417C47.8585 7.61603 48.3207 7.82282 49.163 7.80454"
                  stroke="#7F3F97"
                  stroke-width="2"
                />
                <path
                  d="M9.18633 17.7782C6.95267 16.4598 4.65684 15.2065 2.29883 14.0183C2.2871 14.0114 2.22258 13.9909 2.10527 13.9566C1.87064 13.888 1.69232 13.591 1.57031 13.0654"
                  stroke="#AE387D"
                  stroke-width="2"
                />
                <path
                  d="M8.40438 25.7714C7.83188 26.0113 7.31453 26.0124 6.85232 25.7748C4.89083 24.7648 2.8437 23.9148 0.710938 23.2247"
                  stroke="#CB314B"
                  stroke-width="2"
                />
                <path
                  d="M84.766 22.598C83.7993 21.9011 83.0215 21.4144 82.4326 21.1379C80.6635 20.3062 78.9062 19.4516 77.1605 18.5742C77.123 18.5559 77.0843 18.557 77.0444 18.5776L76.9564 18.6222C76.8461 18.6793 76.7804 18.6473 76.7593 18.5262C76.6772 18.0738 76.5693 17.9721 76.4355 18.2211"
                  stroke="#7F3F97"
                  stroke-width="2"
                />
                <path
                  d="M8.39391 46.9219C8.25783 46.3553 8.01264 45.9839 7.65836 45.808C7.33926 45.6481 7.17151 45.5624 7.15508 45.5509C6.45589 45.0711 5.72854 44.6381 4.97304 44.2519C4.46859 43.996 3.8832 43.635 3.21685 43.1688C2.5552 42.705 1.92757 42.3999 1.33397 42.2537C0.906943 42.1463 0.669972 42.3577 0.623047 42.8878"
                  stroke="#E3572B"
                  stroke-width="2"
                />
                <path
                  d="M22.8662 75.172L25.2242 75.2851C25.3181 75.2897 25.365 75.3388 25.365 75.4325C25.365 75.4668 25.3603 75.5045 25.3509 75.5456C25.3387 75.5996 25.3461 75.6561 25.3718 75.7054C25.3974 75.7548 25.4398 75.7939 25.4917 75.8164C27.5306 76.7258 29.498 77.7643 31.3938 78.9319C31.4806 78.9868 31.5756 79.0119 31.6788 79.0073C32.0355 78.9959 32.3346 79.1399 32.5763 79.4392C32.6373 79.5169 32.7112 79.5797 32.798 79.6277L36.4019 81.6568C36.5145 81.7185 36.599 81.8076 36.6553 81.9241C36.8148 82.2509 37.0811 82.4154 37.4542 82.4177C37.4739 82.4185 37.4931 82.425 37.5093 82.4363C37.5254 82.4475 37.5377 82.4631 37.5445 82.4809C37.5514 82.4987 37.5525 82.5179 37.5476 82.5359C37.5428 82.554 37.5323 82.5702 37.5175 82.5822C37.4401 82.6508 37.3099 82.6942 37.1269 82.7125"
                  stroke="#F29C1F"
                  stroke-width="2"
                />
                <path
                  d="M74.9497 80.4708L64.1768 74.9423"
                  stroke="#E3572B"
                  stroke-width="2"
                />
                <path
                  d="M8.42227 58.672C6.92769 58.0094 5.49178 57.285 4.11451 56.499C4.04882 56.4624 3.97608 56.4453 3.8963 56.4476C3.78603 56.4522 3.68514 56.4213 3.59363 56.355C2.65278 55.649 1.6603 55.1714 0.616211 54.9224"
                  stroke="#F29C1F"
                  stroke-width="2"
                />
                <path
                  d="M84.7826 62.1062C83.1989 61.4138 81.6374 60.7637 80.0983 60.1559C79.4648 59.9023 78.7961 59.4807 78.1943 59.2408C77.9409 59.1403 77.7567 59.2042 77.6417 59.4327C77.5925 59.531 77.5479 59.5287 77.508 59.4259L77.1631 58.5587"
                  stroke="#BC3763"
                  stroke-width="2"
                />
                <path
                  d="M62.7275 47.2621C60.8083 46.6589 58.9934 45.866 57.283 44.8834C57.1985 44.8354 57.114 44.8366 57.0296 44.8868C56.7903 45.0308 56.5216 45.0914 56.2236 45.0685"
                  stroke="#AE387D"
                  stroke-width="2"
                />
                <path
                  d="M31.1543 33.9321C29.0755 33.2809 27.114 32.424 25.2698 31.3615C25.1666 31.3021 25.0821 31.3215 25.0164 31.4197C24.8334 31.6916 24.6434 31.8253 24.4463 31.8207"
                  stroke="#BC3763"
                  stroke-width="2"
                />
                <path
                  d="M53.1045 50.5792C54.2143 51.283 55.364 51.9285 56.5535 52.5158C57.4357 52.9476 58.2335 53.52 58.9467 54.2329"
                  stroke="#CB314B"
                  stroke-width="2"
                />
                <path
                  d="M37.2748 0.291366C37.4461 0.412471 37.6783 0.451314 37.9716 0.407899C38.0209 0.401045 38.0362 0.419326 38.0174 0.46274C37.9986 0.50387 37.974 0.537 37.9435 0.562135C37.8801 0.621545 37.8707 0.68781 37.9153 0.76093C38.1734 1.18822 38.5171 1.50698 38.9465 1.71719C39.7137 2.09422 40.1009 2.28502 40.1079 2.28959C42.5715 3.90051 45.0703 5.45087 47.6043 6.94068C47.6981 6.99552 47.7556 7.07664 47.7767 7.18403C47.8588 7.61589 48.3211 7.82269 49.1634 7.80441C41.4981 7.79755 33.8387 7.80555 26.1851 7.8284C23.3649 7.83525 21.2802 8.00662 19.9311 8.34252C15.0039 9.57184 11.4223 12.7171 9.18633 17.7784C6.95267 16.4599 4.65684 15.2066 2.29883 14.0184C2.2871 14.0116 2.22258 13.991 2.10527 13.9567C1.87064 13.8882 1.69232 13.5911 1.57031 13.0656C2.18269 11.0365 3.19159 9.15712 4.59701 7.42738C8.4191 2.72945 13.5387 0.359917 19.9557 0.318787C25.7323 0.282227 31.5053 0.273086 37.2748 0.291366Z"
                  fill="#9F3E95"
                />
                <path
                  d="M37.2754 0.291903C47.3128 0.275908 57.3478 0.275908 67.3805 0.291903C68.6733 0.294188 70.1444 0.571812 71.7938 1.12478C78.5335 3.38349 83.0665 8.48701 84.5306 15.3591C84.7793 16.5222 84.8579 18.9351 84.7664 22.598C83.7997 21.901 83.0219 21.4143 82.433 21.1378C80.6639 20.3061 78.9066 19.4515 77.1609 18.5741C77.1234 18.5558 77.0847 18.557 77.0448 18.5775L76.9568 18.6221C76.8465 18.6792 76.7808 18.6472 76.7597 18.5261C76.6776 18.0737 76.5697 17.972 76.4359 18.2211C74.329 12.9267 70.6735 9.63407 65.4694 8.34305C64.1062 8.00488 62.0802 7.82894 59.3914 7.81523C55.9776 7.79923 52.5684 7.7958 49.164 7.80494C48.3217 7.82322 47.8594 7.61643 47.7773 7.18457C47.7562 7.07718 47.6987 6.99606 47.6049 6.94122C45.0709 5.4514 42.5721 3.90104 40.1085 2.29013C40.1015 2.28556 39.7143 2.09475 38.9471 1.71773C38.5177 1.50751 38.174 1.18876 37.9159 0.761467C37.8713 0.688347 37.8807 0.622082 37.9441 0.562672C37.9746 0.537537 37.9992 0.504407 38.018 0.463278C38.0368 0.419863 38.0215 0.401582 37.9722 0.408437C37.6789 0.451851 37.4467 0.413008 37.2754 0.291903Z"
                  fill="#5F3F98"
                />
                <path
                  d="M1.57009 13.0656C1.6921 13.5911 1.87042 13.8881 2.10504 13.9567C2.22236 13.991 2.28688 14.0115 2.29861 14.0184C4.65662 15.2066 6.95245 16.4599 9.18611 17.7783C8.46345 20.2667 8.20302 22.931 8.4048 25.7712C7.8323 26.0112 7.31495 26.0123 6.85274 25.7747C4.89125 24.7647 2.84412 23.9147 0.711358 23.2246C0.608121 20.6266 0.633925 18.4067 0.78878 16.565C0.859168 15.7241 1.11961 14.5576 1.57009 13.0656Z"
                  fill="#BD3165"
                />
                <path
                  d="M65.2543 25.1615C67.5829 25.1615 69.4706 23.3231 69.4706 21.0553C69.4706 18.7876 67.5829 16.9492 65.2543 16.9492C62.9258 16.9492 61.0381 18.7876 61.0381 21.0553C61.0381 23.3231 62.9258 25.1615 65.2543 25.1615Z"
                  fill="#9F3E95"
                />
                <path
                  d="M84.766 22.5969L84.7836 62.1055C83.1999 61.4132 81.6384 60.7631 80.0993 60.1553C79.4658 59.9016 78.7971 59.4801 78.1953 59.2402C77.9419 59.1396 77.7577 59.2036 77.6427 59.4321C77.5934 59.5303 77.5489 59.528 77.509 59.4252L77.1641 58.5581C77.1594 46.3654 77.15 34.167 77.1359 21.9629C77.1359 21.0877 76.9025 19.8401 76.4355 18.22C76.5693 17.971 76.6772 18.0727 76.7593 18.5251C76.7804 18.6462 76.8461 18.6782 76.9564 18.6211L77.0444 18.5765C77.0843 18.5559 77.123 18.5548 77.1605 18.5731C78.9062 19.4505 80.6635 20.3051 82.4326 21.1368C83.0215 21.4133 83.7993 21.9 84.766 22.5969Z"
                  fill="#9F3E95"
                />
                <path
                  d="M62.728 47.2612C60.8087 46.658 58.9939 45.8651 57.2834 44.8825C57.199 44.8346 57.1145 44.8357 57.03 44.886C56.7907 45.0299 56.522 45.0905 56.2241 45.0676C57.2306 40.6873 56.5033 36.8679 54.042 33.6095C48.2456 25.9354 36.7969 26.1068 31.1553 33.9317C29.0765 33.2805 27.115 32.4236 25.2708 31.3611C25.1676 31.3017 25.0831 31.3211 25.0174 31.4194C24.8344 31.6913 24.6444 31.825 24.4473 31.8204C33.8969 15.3376 58.9481 18.9262 63.1468 37.2118C63.8929 40.4611 63.7533 43.8109 62.728 47.2612Z"
                  fill="#9F3E95"
                />
                <path
                  d="M8.40545 25.7714L8.39489 46.9223C8.2588 46.3557 8.01362 45.9844 7.65933 45.8084C7.34024 45.6485 7.17248 45.5628 7.15606 45.5514C6.45687 45.0715 5.72952 44.6385 4.97402 44.2523C4.46957 43.9964 3.88417 43.6354 3.21783 43.1693C2.55618 42.7054 1.92855 42.4004 1.33494 42.2541C0.907919 42.1467 0.670949 42.3581 0.624023 42.8882L0.712009 23.2247C2.84477 23.9148 4.8919 24.7648 6.85339 25.7748C7.31561 26.0124 7.83295 26.0113 8.40545 25.7714Z"
                  fill="#D83030"
                />
                <path
                  d="M31.1548 33.9321C25.3759 42.5076 30.838 53.8903 41.3505 54.9631C45.8601 55.4247 49.7783 53.9634 53.1054 50.5793C54.2152 51.2831 55.3648 51.9286 56.5544 52.5159C57.4366 52.9477 58.2343 53.5201 58.9476 54.233C54.2996 59.4999 48.5641 61.9826 41.7412 61.681C34.0407 61.3416 27.2764 57.0127 23.954 50.2023C20.986 44.1174 21.1502 37.9902 24.4468 31.8207C24.6438 31.8253 24.8339 31.6916 25.0169 31.4197C25.0826 31.3215 25.1671 31.3021 25.2703 31.3615C27.1145 32.424 29.076 33.2809 31.1548 33.9321Z"
                  fill="#D83030"
                />
                <path
                  d="M8.39412 46.9219L8.42227 58.6713C6.92769 58.0087 5.49178 57.2844 4.11451 56.4983C4.04882 56.4618 3.97608 56.4446 3.8963 56.4469C3.78603 56.4515 3.68514 56.4206 3.59363 56.3544C2.65278 55.6483 1.6603 55.1707 0.616211 54.9217L0.623251 42.8878C0.670177 42.3577 0.907147 42.1463 1.33417 42.2537C1.92778 42.3999 2.55541 42.705 3.21706 43.1688C3.8834 43.635 4.46879 43.996 4.97324 44.2519C5.72875 44.6381 6.4561 45.0711 7.15529 45.5509C7.17171 45.5624 7.33947 45.6481 7.65856 45.808C8.01285 45.9839 8.25803 46.3553 8.39412 46.9219Z"
                  fill="#ED7E26"
                />
                <path
                  d="M62.7276 47.2621C61.8923 49.8418 60.6323 52.1657 58.9477 54.2336C58.2344 53.5207 57.4367 52.9483 56.5545 52.5164C55.3649 51.9292 54.2153 51.2837 53.1055 50.5799C54.586 48.9027 55.6254 47.0656 56.2237 45.0685C56.5216 45.0914 56.7903 45.0308 57.0296 44.8868C57.1141 44.8366 57.1985 44.8354 57.283 44.8834C58.9935 45.866 60.8083 46.6589 62.7276 47.2621Z"
                  fill="#BD3165"
                />
                <path
                  d="M8.42227 58.672C8.31669 60.7674 8.44457 62.4126 8.80589 63.6076C10.8753 70.4443 15.562 74.2991 22.866 75.1719L25.224 75.285C25.3178 75.2896 25.3647 75.3387 25.3647 75.4324C25.3647 75.4667 25.3601 75.5044 25.3507 75.5455C25.3385 75.5995 25.3458 75.656 25.3715 75.7053C25.3972 75.7547 25.4395 75.7939 25.4914 75.8163C27.5304 76.7257 29.4977 77.7642 31.3935 78.9319C31.4803 78.9867 31.5753 79.0118 31.6786 79.0073C32.0352 78.9958 32.3344 79.1398 32.576 79.4391C32.637 79.5168 32.7109 79.5797 32.7977 79.6276L36.4016 81.6567C36.5143 81.7184 36.5987 81.8075 36.655 81.9241C36.8146 82.2508 37.0809 82.4153 37.4539 82.4176C37.4737 82.4184 37.4929 82.4249 37.509 82.4362C37.5251 82.4475 37.5374 82.463 37.5443 82.4808C37.5511 82.4986 37.5522 82.5178 37.5474 82.5359C37.5426 82.554 37.5321 82.5701 37.5173 82.5821C37.4399 82.6507 37.3096 82.6941 37.1266 82.7124C32.5913 82.7329 28.0571 82.7284 23.5241 82.6987C19.5659 82.6713 17.2513 82.613 16.5803 82.5239C8.97482 81.5093 2.81585 75.6312 1.12301 68.5158C0.820338 67.243 0.667829 65.4482 0.665483 63.1312C0.66079 60.4897 0.644366 57.7535 0.616211 54.9224C1.6603 55.1714 2.65278 55.649 3.59363 56.355C3.68514 56.4213 3.78603 56.4522 3.8963 56.4476C3.97608 56.4453 4.04882 56.4624 4.11451 56.499C5.49178 57.285 6.92769 58.0094 8.42227 58.672Z"
                  fill="#F6B917"
                />
                <path
                  d="M77.1644 58.5588L77.5093 59.426C77.5492 59.5288 77.5938 59.5311 77.643 59.4329C77.758 59.2044 77.9422 59.1404 78.1956 59.2409C78.7974 59.4808 79.4661 59.9024 80.0996 60.156C81.6387 60.7639 83.2002 61.4139 84.7839 62.1063C85.2907 70.2637 82.013 76.3852 74.9507 80.4707L64.1777 74.9422C68.692 74.2933 72.2442 71.9923 74.8345 68.0393C76.62 65.3155 77.3967 62.1554 77.1644 58.5588Z"
                  fill="#D83030"
                />
                <path
                  d="M64.1771 74.9424L74.9501 80.4709C72.2612 81.8282 69.6498 82.5343 67.1158 82.5891C61.1399 82.7171 51.1435 82.7582 37.1269 82.7125C37.3099 82.6942 37.4401 82.6508 37.5175 82.5822C37.5323 82.5702 37.5428 82.5541 37.5476 82.536C37.5525 82.5179 37.5514 82.4987 37.5445 82.4809C37.5377 82.4631 37.5254 82.4476 37.5093 82.4363C37.4931 82.425 37.4739 82.4185 37.4542 82.4177C37.0811 82.4154 36.8148 82.2509 36.6553 81.9242C36.599 81.8076 36.5145 81.7185 36.4019 81.6568L32.798 79.6277C32.7112 79.5798 32.6373 79.5169 32.5763 79.4392C32.3346 79.1399 32.0355 78.9959 31.6788 79.0074C31.5756 79.0119 31.4806 78.9868 31.3938 78.932C29.498 77.7643 27.5306 76.7258 25.4917 75.8164C25.4398 75.794 25.3974 75.7548 25.3718 75.7054C25.3461 75.6561 25.3387 75.5996 25.3509 75.5456C25.3603 75.5045 25.365 75.4668 25.365 75.4325C25.365 75.3388 25.3181 75.2897 25.2242 75.2851L22.8662 75.172C40.9114 75.1286 53.7843 75.1286 61.4848 75.172C62.4115 75.1766 63.309 75.1 64.1771 74.9424Z"
                  fill="#ED7E26"
                />
              </g>
              <defs>
                <clipPath id="clip0_621_1119">
                  <rect
                    width="84"
                    height="83"
                    fill="white"
                    transform="translate(0.744141)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </section>
      </main>
      <footer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1920"
          height="232"
          viewBox="0 0 1920 232"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 92.8L80 108.267C160 123.733 320 154.667 480 162.4C640 170.133 800 154.667 960 139.2C1120 123.733 1257.65 162.4 1417.65 139.2C1577.65 116 1760 30.9333 1840 15.4667L1920 0V232H1840C1760 232 1600 232 1440 232C1280 232 1120 232 960 232C800 232 640 232 480 232C320 232 160 232 80 232H0V92.8Z"
            fill="black"
          />
        </svg>
      </footer>
    </div>
  );
}

export default Contact;
