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
      <h3 className="my-2 text-center text-2xl font-bold text-white">
        {title}
      </h3>
      <div className="my-4 flex justify-center align-middle md:my-2">
        <a href={gitHub} target="blanket">
          <button className="m-1 rounded-lg border-2 border-solid border-gray-700 bg-teal-500 px-14 py-5 text-xl font-medium hover:bg-teal-700 lg:px-12 lg:py-4    lg:text-3xl     ">
            GitHub
          </button>
        </a>
        <a href={liveDemo} target="blanket">
          <button className="m-1 rounded-lg border-2 border-solid border-teal-500 bg-white px-14 py-5 text-xl font-medium text-gray-800 hover:bg-gray-400 lg:px-12  lg:py-4  lg:text-3xl">
            Live
          </button>
        </a>
      </div>
    </article>
  );
};

export default Article;
