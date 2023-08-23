import { Swirl } from "@/public/assets"
import Image from "next/image"

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justfiy-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image 
          src={Swirl}
          alt="My Logo"
          fill
        />
      </div>
      <p className="text-sm text-muted-foreground">
        Jay i is thinking...
      </p>
    </div>
  )
}

export default Loader