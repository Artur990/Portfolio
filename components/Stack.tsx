import { FC } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

interface StackProps {
  name: string;
}

const Stack: FC<StackProps> = ({ name }: StackProps) => {
  return (
    <article className="m-2 flex items-center justify-items-center  p-1 align-middle">
      <BsFillPatchCheckFill className="m-1 text-emerald-500" />
      <h4 className="m-1">{name}</h4>
    </article>
  );
};

export default Stack;
