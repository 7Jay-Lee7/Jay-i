import Image from "next/image";
import { Waiting } from "@/public/assets";

interface EmptyProps {
    label: string;
}


const Empty = ({
  label
}: EmptyProps) => {

  return (
    <div className="h-full p-10 flex flex-col items-center justify-center m-10">
      <div className="relative h-52 w-52 mt-20">
        <Image 
          alt="Empty"
          fill
          src={Waiting}
        />
      </div>
      <p className="text-muted-foreground text-sm text-center">
        {label}
      </p>
    </div>
  )
}

export default Empty;
