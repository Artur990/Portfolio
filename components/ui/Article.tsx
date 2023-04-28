import Image from "next/image";
interface articleProps {
  id: number;
  img: string;
  title: string;
  gitHub: string;
  liveDemo: string;
}

const Article = ({ img, title, gitHub, liveDemo }: articleProps) => {
  return (
    <article className="block justify-center rounded-xl bg-black p-2 transition delay-[0.5s] ease-in-out hover:scale-[105%] md:p-4">
      <Image
        width={300}
        height={300}
        src={img}
        alt=""
        className="m-auto my-4 h-[60%] w-[90%] snap-center justify-center rounded-md"
      />
      <h3 className="my-2 text-center text-xl font-bold text-white">{title}</h3>
      <div className="my-4 flex justify-center align-middle md:my-2">
        <a href={gitHub} target="blanket">
          <button className="m-1 rounded-lg border-2 border-solid border-gray-700 bg-teal-500 px-11 py-3 text-lg font-medium hover:bg-teal-700 md:px-7 md:py-2 lg:py-2 lg:px-8 lg:text-lg xl:py-2 xl:px-5 xl:text-xl">
            GitHub
          </button>
        </a>
        <a href={liveDemo} target="blanket">
          <button className="m-1 rounded-lg border-2 border-solid border-teal-500 bg-white px-11 py-3 text-lg font-medium text-gray-800 hover:bg-gray-400 md:px-7 md:py-2 lg:py-2 lg:px-8 lg:text-lg xl:py-2 xl:px-5 xl:text-xl">
            Live Demo
          </button>
        </a>
      </div>
    </article>
  );
};

export default Article;
