function LogoCloud() {
  return (
    <div className="tw-pb-24 sm:tw-pb-32">
      <div className="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
        <h2 className="tw-text-white/80 tw-text-center tw-w-full tw-font-bold tw-text-xl">
          Partners
        </h2>
        <div className="-tw-mx-6 tw-grid tw-grid-cols-2 tw-gap-0.5 tw-overflow-hidden sm:tw-mx-0 sm:tw-rounded-2xl md:tw-grid-cols-4">
          <div className="tw-flex tw-items-center tw-justify-center tw-bg-white/5 tw-p-6 sm:tw-p-10">
            <img
              className="tw-max-h-16 tw-w-full tw-object-contain tw-invert"
              src="public/LogoDataDotOrg.png"
              alt="DataDotOrg"
              width={158}
              height={48}
            />
          </div>
          <div className="tw-flex tw-items-center tw-justify-center tw-bg-white/5 tw-p-6 sm:tw-p-10">
            <img
              className="tw-max-h-16 tw-w-full tw-object-contain tw-invert"
              src="https://data.org/wp-content/uploads/2021/10/lshtm-logo-975x468.png"
              alt="London School of Hygiene and Tropical Medicine"
              width={158}
              height={48}
            />
          </div>
          <div className="tw-flex tw-items-center tw-justify-center tw-bg-white/5 tw-p-6 sm:tw-p-10">
            <img
              className="tw-max-h-16 tw-w-full tw-object-contain"
              src="public/logo-andes.svg"
              alt="Universidad de los Andes (Uniandes)"
              width={158}
              height={48}
            />
          </div>
          <div className="tw-bg-white/5 tw-p-6 sm:tw-p-10">
            <img
              className="tw-max-h-24 tw-w-full tw-object-contain tw-invert"
              src="public/Javeriana.png"
              alt="Pontificia Universidad Javeriana"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
