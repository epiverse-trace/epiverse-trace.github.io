function Hero() {
  return (
    <div className="tw-relative tw-isolate tw-pt-14">
      <div
        className="tw-absolute tw-inset-x-0 -tw-top-40 -tw-z-10 tw-transform-gpu tw-overflow-hidden tw-blur-3xl sm:-tw-top-80"
        aria-hidden="true"
      >
        <div
          className="tw-relative tw-left-[calc(50%-11rem)] tw-aspect-[1155/678] tw-w-[36.125rem] -tw-translate-x-1/2 tw-rotate-[30deg] tw-bg-gradient-to-tr tw-from-[#1063A0] tw-to-[#deff00] tw-opacity-20 sm:tw-w-left-[calc(50%-30rem)] sm:tw-w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="tw-py-24 sm:tw-py-32">
        <div className="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
          <div className="tw-mx-auto tw-max-w-2xl tw-text-center">
            <h1 className="tw-text-4xl tw-font-bold tw-tracking-tight tw-text-white sm:tw-text-6xl">
              Developing tools for the next epidemic
            </h1>
            <p className="tw-mt-6 tw-text-lg tw-leading-8 tw-text-gray-300">
              Epiverse is a universe of epidemiological tools to respond to
              outbreaks. From reading your data through estimating vaccine
              efficacy, Epiverse provides robust tools so you can focus on the
              results.
            </p>
            <div className="tw-mt-10 tw-flex tw-items-center tw-justify-center tw-gap-x-6">
              <a
                href="./getting-started.html"
                className="tw-rounded-md tw-bg-lime-500 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-black tw-shadow-sm hover:tw-bg-lime-400 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-lime-400"
              >
                Get started
              </a>
              <a
                href="https://join.slack.com/t/epiversetrace/shared_invite/zt-2dl52uahe-vH1AtHgYUV_IptVk84Tzrw"
                className="tw-text-sm tw-font-semibold tw-leading-6 tw-text-white"
              >
                Join our chat <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <img
            src="../public/render1717079674378.gif"
            alt="App screenshot"
            width={2432}
            height={1442}
            className="tw-mt-16 tw-rounded-md tw-bg-white/5 tw-shadow-w-2xl tw-ring-1 tw-ring-white/10 sm:tw-mt-24"
          />
        </div>
      </div>
      <div
        className="tw-w-absolute tw-w-inset-x-0 tw-w-top-[calc(100%-13rem)] -tw-w-z-10 tw-w-transform-gpu tw-w-overflow-hidden tw-w-blur-3xl sm:tw-w-top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="tw-w-relative tw-w-left-[calc(50%+3rem)] tw-w-aspect-[1155/678] tw-w-[36.125rem] -tw-translate-x-1/2 tw-bg-gradient-to-tr tw-from-[#ff80b5] tw-to-[#9089fc] tw-opacity-20 sm:tw-w-left-[calc(50%+36rem)] sm:tw-w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
