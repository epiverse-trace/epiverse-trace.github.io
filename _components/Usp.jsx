import RocketIcon from "./RocketIcon";
import AcademicIcon from "./AcademicIcon";
import UnlockIcon from "./UnlockIcon";

const features = [
  {
    name: "Robust",
    description:
      "All tools are developed with high standards, ensured through automated tests and continuous review.",
    icon: RocketIcon,
  },
  {
    name: "Validated",
    description:
      "Our tools get validated through their use in other tools, in research, and in policy.",
    icon: AcademicIcon,
  },
  {
    name: "Reliable",
    description:
      "We manage the lifecycle of our tools carefully to avoid sudden breaking changes.",
    icon: UnlockIcon,
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
