# Epiverse-TRACE Website

This repository contains the source code for the [Epiverse-TRACE website](https://epiverse-trace.github.io), showcasing our ecosystem of tools for epidemic analytics and outbreak response preparedness.

## About Epiverse-TRACE

Epiverse-TRACE develops **robust, validated, and reliable** software tools for epidemic analytics, helping to transform how we respond to infectious disease outbreaks globally. Our mission is to build integrated, generalisable, and scalable community-driven software that addresses gaps identified during the COVID-19 pandemic.

### Our Ecosystem

We maintain R packages covering the complete epidemiological analysis pipeline:

- **Data Management**: Import ([`readepi`](https://epiverse-trace.github.io/readepi)), clean ([`cleanepi`](https://epiverse-trace.github.io/cleanepi)), simulate ([`simulist`](https://epiverse-trace.github.io/simulist)), and validate ([`linelist`](https://epiverse-trace.github.io/linelist)) epidemiological data
- **Parameter Estimation**: Access epidemiological parameters ([`epiparameter`](https://epiverse-trace.github.io/epiparameter)), estimate case fatality ratios ([`cfr`](https://epiverse-trace.github.io/cfr)), and analyze seroprevalence ([`serofoi`](https://epiverse-trace.github.io/serofoi))
- **Modeling & Analysis**: Simulate epidemic dynamics ([`epidemics`](https://epiverse-trace.github.io/epidemics)), calculate final outbreak size ([`finalsize`](https://epiverse-trace.github.io/finalsize)), and assess vaccine efficacy ([`vaccineff`](https://epiverse-trace.github.io/vaccineff)), analyze transmission chains ([`epichains`](https://epiverse-trace.github.io/epichains)), superspreading events ([`superspreading`](https://epiverse-trace.github.io/superspreading)), and vector-borne diseases ([`epiCo`](https://epiverse-trace.github.io/epiCo))

All packages are built on methods validated through real epidemic responses including cholera, COVID-19, dengue, Ebola, and Zika outbreaks.

## Repository Structure

This website is built with [Quarto](https://quarto.org/) and features:

- [**Blog**](https://epiverse-trace.github.io/blog.html): Technical articles, package releases, and community updates
- **Documentation**: [Getting started](https://epiverse-trace.github.io/getting-started.html) guides and [learning materials](https://epiverse-trace.github.io/learn.html)
- [**Resources**](https://epiverse-trace.github.io/resources.html): How-to guides and tutorials
- [**Community**](https://epiverse-trace.github.io/people.html): Contributor profiles and team information
- [**Presentations**](https://epiverse-trace.github.io/presentations.html): Conference talks and workshop materials

```
├── _components/          # React components for interactive elements
├── _data/               # CSV files with contributor and package data
├── posts/               # Blog posts and articles
├── slides/              # Presentation materials
├── resources/           # Documentation and guides
├── _scripts/            # Data collection and automation scripts
└── _templates/          # Content generation templates
```

## Development Setup

### Prerequisites

- [Quarto](https://quarto.org/docs/get-started/) CLI installed
- [R](https://cran.r-project.org/) (for content generation scripts)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/epiverse-trace/epiverse-trace.github.io.git
   cd epiverse-trace.github.io
   ```

2. **Render the website**
   ```bash
   # Render entire website
   quarto render

   # Render individual pages
   quarto render <file.qmd>

   # Preview locally
   quarto preview
   ```

### Content Management

- **Blog posts**: Add new `.qmd` files to `posts/` directory
- **Release posts**: Automatically upon release on GitHub
- **Contributor data**: Automatically updated via `_scripts/collect_contributor_data.R`
- **Package information**: Pulled from `_data/epiverse_pkgs.csv`

## Contributing

We welcome contributions! Feel encouraged to open up pull requests for small changes or existing issues, and refer to our [Contributing guide](https://github.com/epiverse-trace/.github/blob/main/CONTRIBUTING.md) for further guidance.

If you want to discuss a new package, [please use our discussion board first](https://github.com/orgs/epiverse-trace/discussions).

### Scheduling Pull Requests
For time-sensitive content (e.g., blog posts), you can schedule merges by adding `/schedule <datetime>` at the end of your PR description using ISO8601 format (e.g., `/schedule 2024-12-25T10:00:00Z`).

## Community

Epiverse-TRACE is a collaborative effort involving:

- **London School of Hygiene & Tropical Medicine (LSHTM)**
- **MRC Unit The Gambia at LSHTM**
- **Universidad Javeriana** (Colombia)
- **Universidad de los Andes** (Colombia)

Supported by the **Wellcome Trust**, **Rockefeller Foundation**, and **IDRC Canada** as part of the data.org Epiverse initiative.

### Connect With Us

- **Bluesky**: [@epiverse-trace.bsky.social](https://bsky.app/profile/epiverse-trace.bsky.social)
- **GitHub**: [@epiverse-trace](https://github.com/epiverse-trace)
- **R Universe**: [epiverse-trace.r-universe.dev](https://epiverse-trace.r-universe.dev/packages)
- **Twitter**: [@Epiverse_TRACE](https://twitter.com/Epiverse_TRACE)
- **Website**: [epiverse-trace.github.io](https://epiverse-trace.github.io)

## License

This website content is licensed under [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/). Website code is licensed MIT. Individual software packages maintain their own licenses.
