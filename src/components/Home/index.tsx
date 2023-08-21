import Image from "next/image";

type Props = {
  children: JSX.Element;
};

const Home: React.FC<Props> = ({ children }) => {


  return (
    <div className="flex flex-col h-screen">
      <div className="bg-[#0B2239] h-20">
        <div className="container mx-auto md:p-0 px-3 w-screen">
          <header className="flex flex-col xl:flex-row items-center py-2">
            <div className="flex">
              <div className="flex flex-col xl:flex-row justify-between w-full md:w-auto">
                <Image
                  className=""
                  src="home.svg"
                  alt="Next.js Logo"
                  width={135}
                  height={64}
                />
              </div>


            </div>

          </header>
        </div>
      </div>
      <main className="bg-gray-200 dark:bg-custom-black flex-1">
        <div className="container mx-auto px-5 md:px-0 h-full">{children}</div>
      </main>
    </div>
  );
};

export default Home;
