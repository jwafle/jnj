import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="flex justify-end items-center">
          <div className="">jerei</div>
          <Avatar>
            <AvatarImage src="https://twitter.com/jnwafle/photo.jpg" alt="jared woelfel"/>
            <AvatarFallback>jw</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex max-w-prose space-x-4">
          <div className="flex flex-row max-w-96">
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold">content 1</h1>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</div>
            </div>
          <Separator orientation="vertical" />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="">
              <h1 className="text-xl font-semibold">content 2</h1>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
            </div>
            <Separator />
            <div className="">
              <h1 className="text-xl font-semibold">content 3</h1>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
            </div>
          </div>
      </div>
      </div>

      <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
      </div>
    </main>
  );
}
