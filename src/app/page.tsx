"use client"
import { Separator } from "@/components/ui/separator";
import LifespanTimer from "@/components/lifespan-timer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="space-y-5">
          <div className="flex justify-between items-center">
              <div className="font-bold text-5xl">
                <div>hello,</div>
                <div>welcome!</div>
              </div>
            <div>
              about me
            </div>
          </div>
          <Separator />
          <div className="flex space-x-5">
            <div className="flex flex-row max-w-96 space-x-5">
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold">content 1</h1>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas porttitor congue massa. Fusce posuere, justo. Nullam
                  dictum felis eu pede mollis pretium. Integer tincidunt. Cras
                  dapibus. Vivamus elementum semper nisi. Aenean vulputate
                  eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                  vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                  viverra quis, feugiat a, tellus.
                </div>
              </div>
            </div>
            <div>
            <Separator orientation="vertical" />
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-right">
                <h1 className="text-xl font-semibold">content 2</h1>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod
                </div>
              </div>
              <Separator />
              <div className="text-right">
                <h1 className="text-xl font-semibold">content 3</h1>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod
                </div>
              </div>
            d</div>
          </div>
          <Separator />
          <div className="flex flex-row space-x-5">
            <div>
              <p>wisdom to live with</p>
              <ul>
                <li className="hover:font-bold">{`1 - "the algorithm"`}</li>
                <li className="hover:font-bold">{`2 - "the algorithm"`}</li>
                <li className="hover:font-bold">3</li>
                <li className="hover:font-bold">4</li>
                <li className="hover:font-bold">5</li>
              </ul>
            </div>
            <div>
              <Separator orientation="vertical" />
            </div>
            <div>
              hello
            </div>
          </div>
        </div>

      <div className="flex h-5 items-center space-x-4 text-sm">
        <LifespanTimer />
      </div>
    </main>
  );
}
