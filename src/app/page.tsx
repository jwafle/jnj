import { Separator } from "@/components/ui/separator";
import LifespanTimer from "@/components/lifespan-timer";
import { SkeletonImage } from "@/components/skeleton-image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-24 justify-between">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="font-bold text-5xl">
            <div>{"hi i'm jared"}</div>
          </div>
          <div className="text-right">a little about me...</div>
        </div>
        <Separator />
        <div className="grid grid-cols-3 gap-5">
          <div className="grid grid-flow-row gap-5">
            <div className="flex flex-row gap-5">
              <div className="flex flex-col gap-5">
                <h1 className="text-xl font-semibold">an engineer at heart</h1>
                <div>
                  hungry to learn. unwilling to yield in the face of hard
                  problems. thoughtful about the intention and value of applied
                  effort. committed to technical and operational excellence. understands how to deliver value.
                </div>
              </div>
              <Separator orientation="vertical" />
            </div>
          </div>
          <div className="grid col-span-2 grid-flow-row gap-5">
            <div className="grid grid-rows-2">
              <div className="grid grid-cols-2 font-semibold">
                <span>2023 - present</span>
                <h1 className="whitespace-nowrap text-right">
                  software engineer @{" "}
                  <a href="https://www.target.com/"><span className="text-red-700">target</span></a>
                </h1>
              </div>
              <div className="text-right">
                member of the Measurement team, responsible for observability
                and telemetry at target
              </div>
            </div>
            <Separator />
            <div className="grid grid-rows-2">
              <div className="grid grid-cols-2 font-semibold">
                <span>2022 - 2023</span>
                <h1 className="whitespace-nowrap text-right">
                  tlp software engineer @{" "}
                  <a href="https://www.target.com/"><span className="text-red-700">target</span></a>
                </h1>
              </div>
              <div className="text-right">
                one rotation on High Performance Distributed Computing, one
                rotation on Measurement
              </div>
            </div>
            <Separator />
            <div className="grid grid-rows-2">
              <div className="grid grid-cols-2 font-semibold">
                <span>2021 - 2022</span>
                <h1 className="whitespace-nowrap text-right">
                  project engineering intern @{" "}
                  <a href="https://www.osii.com/"><span className="text-blue-900">osi</span></a>
                </h1>
              </div>
              <div className="text-right">intern working on internal software tooling for electrical grid</div>
            </div>
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-5 gap-5">
          <div className="grid">
            <p>wisdom i live by</p>
            <ul>
              <li className="hover:font-bold">{`1 - "the algorithm"`}</li>
              <li className="hover:font-bold">{`2 - "the algorithm"`}</li>
              <li className="hover:font-bold">3</li>
              <li className="hover:font-bold">4</li>
              <li className="hover:font-bold">5</li>
            </ul>
          </div>
          <div className="col-span-3">
            <SkeletonImage src="/small_cover.jpeg" alt="personal cover photo" width={700} height={466} />
          </div>
          <div className="grid grid-flow-row">
            <div>hello</div>
            <div>hello</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-sm">
        <LifespanTimer />
      </div>
    </main>
  );
}
