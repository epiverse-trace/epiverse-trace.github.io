function LogoCloud() {
  return (
    <div className="tw-py-24 sm:tw-py-32">
      <div className="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
        <h2 className="tw-text-white/80 tw-text-center tw-w-full tw-font-bold tw-text-xl">
          Partners
        </h2>
        <div className="-tw-mx-6 tw-grid tw-grid-cols-2 tw-gap-0.5 tw-overflow-hidden sm:tw-mx-0 sm:tw-rounded-2xl md:tw-grid-cols-4">
          <div className="tw-bg-white/5 tw-p-6 sm:tw-p-10">
            <img
              className="tw-max-h-12 tw-w-full tw-object-contain tw-invert"
              src="../public/LogoDataDotOrg.png"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
          <div className="tw-bg-white/5 tw-p-8 sm:tw-p-10">
            <img
              className="tw-max-h-12 tw-w-full tw-object-contain tw-invert"
              src="https://data.org/wp-content/uploads/2021/10/lshtm-logo-975x468.png"
              alt="Transistor"
              width={158}
              height={48}
            />
          </div>
          <div className="tw-bg-white/5 tw-p-6 sm:tw-p-10">
            <img
              className="tw-max-h-12 tw-w-full tw-object-contain tw-invert"
              src="https://data.org/wp-content/uploads/2022/02/Universidad-de-los-Andes-975x377.png"
              alt="Laravel"
              width={158}
              height={48}
            />
          </div>
          <div className="tw-bg-white/5 tw-p-6 sm:tw-p-10">
            <img
              className="tw-max-h-12 tw-w-full tw-object-contain tw-invert"
              src="https://data.org/wp-content/uploads/2022/02/javeriana-logo-1-907x975.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
      <div className="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8 tw-pt-16">
        <h2 className="tw-text-white/80 tw-text-center tw-w-full tw-font-bold tw-text-xl">
          Funders
        </h2>
        <div className="-tw-mx-6 tw-grid tw-grid-cols-2 tw-gap-0.5 tw-overflow-hidden sm:tw-mx-0 sm:tw-rounded-2xl md:tw-grid-cols-2">
          <div className="tw-bg-white/5 tw-p-6 sm:tw-p-10">
            <img
              className="tw-max-h-12 tw-w-full tw-object-contain tw-invert"
              src="https://data.org/wp-content/uploads/2024/01/Wellcome_logo_Black-01.svg"
              alt="Reform"
              width={200}
              height={61}
            />
          </div>
          <div className="tw-bg-white/5 tw-p-6 sm:tw-p-10">
            <a href="https://data.org/organizations/lshtm/">
              <img
                className="tw-max-h-12 tw-w-full tw-object-contain tw-invert"
                src="https://data.org/wp-content/uploads/2022/08/RF_logo_screen_green-e1661182764242-975x365.png"
                alt="Tuple"
                width={158}
                height={48}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
