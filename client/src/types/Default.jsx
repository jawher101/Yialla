import { Link } from "react-router-dom";
import FooterAuthDefault from "../components/FooterAuthDefault";

function Default(props) {
  const { maincard } = props;
  return (
    <div className="flex">
      <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
        <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full  ">
          <Link to="/admin" className="mt-0 w-max lg:pt-10 ">
            <div className="mx-auto flex h-fit w-fit items-center hover:cursor-pointer">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.70994 2.11997L2.82994 5.99997L6.70994 9.87997C7.09994 10.27 7.09994 10.9 6.70994 11.29C6.31994 11.68 5.68994 11.68 5.29994 11.29L0.709941 6.69997C0.319941 6.30997 0.319941 5.67997 0.709941 5.28997L5.29994 0.699971C5.68994 0.309971 6.31994 0.309971 6.70994 0.699971C7.08994 1.08997 7.09994 1.72997 6.70994 2.11997V2.11997Z"
                  fill="#A3AED0"
                />
              </svg>
              <p className="ml-3 text-sm text-gray-600">Acceuil</p>
            </div>
          </Link>
          {maincard}
          <div className="fixed z-0 right-0 hidden h-full  md:block lg:w-[49vw] 2xl:w-[44vw] bg-yellow-400">
            <div
              className={`absolute flex h-full w-full items-end justify-centerbg-cover bg-center lg:rounded-bl-[120px] xl:rounded-bl-[200px]`}
            >
              <div className=" flex h-full w-full">
                <div className="flex  w-full " />
              </div>
            </div>
          </div>
        </div>
        <FooterAuthDefault />
      </div>
    </div>
  );
}

export default Default;
