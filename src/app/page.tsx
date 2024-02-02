import { Separator } from "@/components/ui/separator";
import LifespanTimer from "@/components/lifespan-timer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-5">
        <div className="flex justify-between">
          <div className="font-bold text-5xl">
            <div>{"hi i'm jared"}</div>
          </div>
          <div>a little about me...</div>
        </div>
        <Separator />
        <div className="flex space-x-5">
          <div className="flex flex-row max-w-96 space-x-5">
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold">an engineer at heart</h1>
              <div>
                hungry to learn. unwilling to yield in the face of hard
                problems. thoughtful about the intention and value of applied
                effort. committed to excellence of outcome.
              </div>
            </div>
          </div>
          <div>
            <Separator orientation="vertical" />
          </div>
          <div className="flex flex-col space-y-4 max-w-5xl">
            <div className="text-right">
              <div className="flex flex-row text-xl font-semibold justify-between space-x-10">
                <span className="">2023 - present</span>
                <h1 className="whitespace-nowrap">
                  software engineer @{" "}
                  <a href="https://www.target.com/"><span className="text-red-700">target</span></a>
                </h1>
              </div>
              <div>
                member of the Measurement team, responsible for observability
                and telemetry at target
              </div>
            </div>
            <Separator />
            <div className="text-right">
              <div className="flex flex-row text-xl font-semibold justify-between space-x-10">
                <span className="">2022 - 2023</span>
                <h1 className="whitespace-nowrap">
                  tlp software engineer @{" "}
                  <a href="https://www.target.com/"><span className="text-red-700">target</span></a>
                </h1>
              </div>
              <div>
                one rotation on High Performance Distributed Computing, one
                rotation on Measurement
              </div>
            </div>
            <Separator />
            <div className="text-right">
              <div className="flex flex-row text-xl font-semibold justify-between space-x-10">
                <span className="">2021 - 2022</span>
                <h1 className="whitespace-nowrap">
                  project engineering intern @{" "}
                  <a href="https://www.osii.com/"><span className="text-blue-900">osi</span></a>
                </h1>
              </div>
              <div>intern working on internal software tooling in python</div>
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex flex-row space-x-5">
          <div>
            <p>wisdom i live by</p>
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
          <div>hello</div>
        </div>
      </div>

      <div className="flex h-5 items-center space-x-4 text-sm">
        <LifespanTimer />
      </div>
    </main>
  );
}
