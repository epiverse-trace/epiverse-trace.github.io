import ShellIcon from "./ShellIcon";
import CommunityIcon from "./CommunityIcon";
import DocumentCheckIcon from "./DocumentCheckIcon";
import CheckIcon from "./CheckIcon";
import ChatBubbleIcon from "./ChatBubbleIcon";
import RocketIcon from "./RocketIcon";
const features = [
  {
    name: "Open Source",
    description: "We make our work open and accessible, for anyone to verify.",
    icon: ShellIcon,
  },
  {
    name: "Lean and Agile",
    description:
      "We focus on clearly defined problems and deliver viable products.",
    icon: RocketIcon,
  },
  {
    name: "Documentation as Code",
    description:
      "Quality code requires quality documentation, so we regard docs as code.",
    icon: DocumentCheckIcon,
  },
  {
    name: "Co-creation",
    description:
      "Your suggestions help shape Epiverse - surfacing needs is encouraged.",
    icon: ChatBubbleIcon,
  },
  {
    name: "Social Impact",
    description:
      "We close access gaps and transfer our software into practice.",
    icon: CommunityIcon,
  },
  {
    name: "Quality control",
    description:
      "All our software gets community reviewed. We are in this together!",
    icon: CheckIcon,
  },
];

function Benefits() {
  return (
    <>
      <div className="tw-py-12 sm:tw-py-16 tw-text-white">
        <div className="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
          <div className="tw-mx-auto tw-max-w-2xl sm:tw-text-center">
            <h2 className="tw-mt-2 tw-text-3xl tw-font-bold tw-tracking-tight sm:tw-text-4xl">
              How we work
            </h2>
            {/* <p className="tw-mt-6 tw-text-lg tw-leading-8">
              Epiverse 
            </p> */}
          </div>
        </div>
        <div className="tw-mx-auto tw-mt-16 tw-max-w-7xl tw-px-6 sm:tw-mt-20 md:tw-mt-24 lg:tw-px-8">
          <dl className="tw-mx-auto tw-grid tw-max-w-2xl tw-grid-cols-1 tw-gap-x-6 tw-gap-y-10 tw-text-base tw-leading-7 sm:tw-grid-cols-2 lg:tw-mx-0 lg:tw-max-w-none lg:tw-grid-cols-3 lg:tw-gap-x-8 lg:tw-gap-y-16">
            {features.map((feature) => {
              const Component = feature.icon;
              return (
                <div key={feature.name} className="tw-flex tw-flex-col">
                  <dt className="tw-flex tw-font-semibold ">
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
    </>
  );
}
