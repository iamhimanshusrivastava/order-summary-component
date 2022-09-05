import { Fragment } from "react";
import Head from "next/head";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Order Summary Component</title>
        <meta name="description" content="Order Summary Component" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon-32x32.png"
        />
      </Head>

      <main>
        <div className="h-screen px-6 flex justify-center items-center  font-redHatDisplay bg-paleBlue bg-[url('/img/pattern-background-mobile.svg')] sm:bg-[url('/img/pattern-background-desktop.svg')] bg-no-repeat bg-contain">
          <div className="w-[375px] sm:w-[440px] flex flex-col bg-white rounded-2xl shadow-xl shadow-paleBlue/50">
            <div>
              <Image
                className="rounded-t-2xl"
                src="/img/illustration-hero.svg"
                alt="Music Guy Illustration"
                width="450"
                height="220"
                layout="responsive"
                priority="true"
              />
            </div>
            <div className="px-6 py-8 sm:py-10 sm:px-12 flex flex-col text-center">
              <h3 className="text-2xl sm:text-[28px] text-darkBlue font-black">
                Order Summary
              </h3>
              <p className="mt-4 px-2 sm:px-0 text-base text-desaturatedBlue">
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
              </p>
              <div className="mt-6 p-4 sm:p-6 flex justify-between items-center bg-veryPaleBlue rounded-xl">
                <div className="flex space-x-5 items-center">
                  <Image
                    src="/img/icon-music.svg"
                    alt="Music Icon Illustration"
                    width="50"
                    height="48"
                    layout="fixed"
                  />
                  <div>
                    <p className="text-darkBlue font-black text-sm sm:text-base">
                      Annual Plan
                    </p>
                    <p className="text-desaturatedBlue text-sm sm:text-base">
                      $59.99/year
                    </p>
                  </div>
                </div>
                <div>
                  <Link href="">
                    <a className="text-xs sm:text-sm text-brightBlue font-semibold underline hover:text-blue-500 hover:no-underline">
                      Change
                    </a>
                  </Link>
                </div>
              </div>

              <button className="mt-6 sm:mt-8 py-4 text-sm text-center text-white font-black bg-brightBlue shadow-xl shadow-brightBlue/30 rounded-xl hover:bg-blue-500">
                Proceed to Payment
              </button>
              <button className="mt-6 sm:mt-8 text-sm text-center text-desaturatedBlue font-black hover:text-darkBlue">
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
