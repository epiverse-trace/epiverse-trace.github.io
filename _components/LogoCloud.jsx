function LogoCloud() {
  return (
    <div className="tw-pb-24 sm:tw-pb-32">
      <div className="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
        <h2 className="tw-text-white/80 tw-text-center tw-w-full tw-font-bold tw-text-xl">
          Partners
        </h2>
        <div className="-tw-mx-6 tw-grid tw-grid-cols-2 tw-gap-0.5 tw-overflow-hidden sm:tw-mx-0 sm:tw-rounded-2xl md:tw-grid-cols-4">
          <div className="tw-flex tw-items-center tw-justify-center tw-bg-white/5 tw-p-6 sm:tw-p-10">
            <a href="https://data.org" target="_blank" rel="norefer">
              <img
                className="tw-max-h-16 tw-w-full tw-object-contain tw-invert"
                src="public/LogoDataDotOrg.png"
                alt="DataDotOrg"
                width={158}
                height={48}
              />
            </a>
          </div>
          <div className="tw-flex tw-items-center tw-justify-center tw-bg-white/5 tw-p-6 sm:tw-p-10">
            <a href="https://www.lshtm.ac.uk/" target="_blank" rel="norefer">
              <img
                className="tw-max-h-16 tw-w-full tw-object-contain tw-invert"
                src="public/UKRI_MRC_Unit_the_Gambia_LSHTM_Horizontal_Greyscale.png"
                alt="London School of Hygiene and Tropical Medicine"
                width={158}
                height={48}
              />
            </a>
          </div>
          <div className="tw-flex tw-items-center tw-justify-center tw-bg-white/5 tw-p-6 sm:tw-p-10">
            <a href="https://uniandes.edu.co/en" target="_blank" rel="norefer">
              <img
                className="tw-max-h-16 tw-w-full tw-object-contain"
                src="public/logo-andes.png"
                alt="Universidad de los Andes (Uniandes)"
                width={158}
                height={48}
              />
            </a>
          </div>
          <div className="tw-bg-white/5 tw-p-6 sm:tw-p-10">
            <a
              href="https://www.javeriana.edu.co/inicio"
              target="_blank"
              rel="norefer"
            >
              <img
                className="tw-max-h-24 tw-w-full tw-object-contain tw-invert"
                src="public/Javeriana.png"
                alt="Pontificia Universidad Javeriana"
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
