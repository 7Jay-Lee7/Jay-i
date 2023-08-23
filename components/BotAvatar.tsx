import { Avatar, AvatarImage } from "@/components/ui/avatar";

const BotAvatar = () => {
  return (
    <Avatar className="h-10 w-10">
      <AvatarImage className="p-1 animate-spin" src="./assets/Swirl.png" />
    </Avatar>
  )
}

export default BotAvatar