import { Separator } from "@/components/ui/separator";
import LifespanTimer from "@/components/lifespan-timer";
import { SkeletonImage } from "@/components/skeleton-image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-24 justify-between gap-4">
      <div className="flex flex-col gap-5 mb-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="font-bold text-5xl">
            <span>{"hi i'm jared 👋"}</span>
          </div>
          <div className="text-right">a little about me...</div>
        </div>
        <Separator />
        <div className="grid grid-cols-3 gap-5">
          <div className="grid grid-flow-row gap-5">
            <div className="flex flex-row gap-5">
              <div className="flex flex-col gap-5 grow">
                <span>my thoughts</span>
                <span className="text-right">wisdom i have learned</span>
                <span>interesting thoughts from others</span>
              </div>
              <Separator orientation="vertical" />
            </div>
          </div>
          <div className="col-span-2 flex flex-row">
            <div className="grow grid grid-flow-row gap-5">
              <div className="grid grid-rows-2">
                <div className="grid grid-cols-2 font-semibold">
                  <span>2023 - present</span>
                  <span className="flex flex-row justify-end">
                    <span className="whitespace-pre">software engineer @ </span>
                    <a href="https://www.target.com/">
                      <div className="flex flex-row">
                        <span className="text-red-700 underline hover:font-extrabold hover:scale-105">
                          target
                        </span>
                      </div>
                    </a>
                  </span>
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
                  <span className="flex flex-row justify-end">
                    <span className="whitespace-pre">software engineer @ </span>
                    <a href="https://www.target.com/">
                      <div className="flex flex-row">
                        <span className="text-red-700 underline hover:font-extrabold hover:scale-105">
                          target
                        </span>
                      </div>
                    </a>
                  </span>
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
                  <span className="flex flex-row justify-end">
                    <span className="whitespace-pre">
                      project engineering intern @{" "}
                    </span>
                    <a href="https://www.osii.com/">
                      <div className="flex flex-row">
                        <span className="text-blue-900 underline hover:font-extrabold hover:scale-105">
                          osi
                        </span>
                      </div>
                    </a>
                  </span>
                </div>
                <div className="text-right">
                  intern working on internal software tooling for electrical
                  grid
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-5 gap-5">
          {/* <p>wisdom i live by</p>
            <ul>
              <Link href="/wisdom/the_algorithm">
                <li className="hover:font-bold">{`1 - "the algorithm"`}</li>
              </Link>
              <li className="hover:font-bold">{`2 - "the algorithm"`}</li>
              <li className="hover:font-bold">3</li>
              <li className="hover:font-bold">4</li>
              <li className="hover:font-bold">5</li>
            </ul> */}
          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-5">
              <span className="font-bold">2018 - 2022</span>
              <span className="whitespace-pre text-wrap">
                studied electrical engineering (and played college baseball) @{" "}
              </span>
              <a href="https://unwsp.edu/program/engineering-abet-accredited/">
                <div className="flex flex-row">
                  <span className="font-bold text-purple-900 underline hover:font-extrabold hover:scale-105">
                    University of Northwestern, St. Paul
                  </span>
                </div>
              </a>
              <span></span>
              <span>
                <span className="font-bold">gpa:</span> 4.0
              </span>
              <span>
                <span className="font-bold">minors:</span> [Chinese Studies,
                Bible]
              </span>
            </div>
            <Separator orientation="vertical" />
          </div>
          <div className="col-span-3 aspect-video relative grow">
            <HoverCard>
              <HoverCardTrigger className="flex w-full h-full">
                <SkeletonImage src="/small_cover.jpeg" alt="cover image" />
              </HoverCardTrigger>
              <HoverCardContent hideWhenDetached>
                <h3 className="font-bold">中国福建省厦门市</h3>
                <span className="text-xs font-light">
                  Sunday, July 2, 2023 4:23 p.m.
                </span>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="flex flex-row gap-5">
            <Separator orientation="vertical" />
            <div className="grid grid-flow-row">
              <div>
                <span className="font-bold">design/research experience</span>
              </div>
              <div>
                <span className="font-bold">open source contributor</span>
              </div>
            </div>
          </div>
        </div>
        <Separator />
      </div>

      <div className="flex flex-col items-center text-sm">
        <LifespanTimer />
      </div>
    </main>
  );
}
