const features = [
  {
    name: "Robust",
    description:
      "All tools are developed with high standards, ensured through automated tests and continuous review.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="tw-w-6 tw-h-6 tw-stroke-lime-500 tw-mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        />
      </svg>
    ),
  },
  {
    name: "Validated",
    description:
      "Our tools get validated through their use in other tools, in research, and in policy.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="tw-w-6 tw-h-6 tw-stroke-lime-500 tw-mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    name: "Reliable",
    description:
      "We manage the lifecycle of our tools carefully to avoid sudden breaking changes.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="tw-w-6 tw-h-6 tw-stroke-lime-500 tw-mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
  },
];
function Usp() {
  return (
    <>
      <div className="tw-overflow-hidden tw-bg-white/5 tw-py-24 sm:tw-py-32">
        <div className="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
          <div className="tw-mx-auto tw-grid tw-max-w-2xl tw-grid-cols-1 tw-gap-x-8 tw-gap-y-16 sm:tw-gap-y-20 lg:tw-mx-0 lg:tw-max-w-none lg:tw-grid-cols-2">
            <div className="lg:tw-pr-8 lg:tw-pt-4">
              <div className="lg:tw-max-w-lg tw-text-white">
                <h2 className="tw-mt-2 tw-text-3xl tw-font-bold tw-tracking-tight  sm:tw-text-4xl">
                  Better prepared, together
                </h2>
                <p className="tw-mt-6 tw-text-lg tw-leading-8 ">
                  We are building robust, validated, and reliable tools that we
                  know we will need in an epidemic. This is a direct response to
                  not having them during the COVID-19 pandemic. This way we can
                  address a next epidemic with a head start.
                </p>
                <dl className="tw-mt-10 tw-max-w-xl space-y-8 tw-text-base tw-leading-7 lg:tw-max-w-none">
                  {features.map((feature) => {
                    const Component = feature.icon;
                    return (
                      <div
                        key={feature.name}
                        className="tw-relative tw-pl-9 tw-my-2"
                      >
                        <dt className="tw-font-semibold tw-flex -tw-ml-[1.75rem]">
                          <Component aria-hidden="true" />
                          {feature.name}
                        </dt>{" "}
                        <dd className="tw-inline">{feature.description}</dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </div>
            <img
              src="../public/Epiverse-Trace-Summit-group-photo-1920x1080.jpg"
              alt="Epiverse summit 2023 group photo"
              className="tw-w-[48rem] tw-max-w-none tw-rounded-xl tw-shadow-w-xl tw-ring-1 tw-ring-gray-400/10 sm:tw-w-[57rem] md:-tw-ml-32 lg:-tw-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </>
  );
}
