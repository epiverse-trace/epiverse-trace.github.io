# Epiverse developer website

This repository contains all the code, markdown files, scripts, assets, and so on used to create [the Epiverse website](https://epiverse-trace.github.io).

## Rendering the website

Please ensure you have Quarto installed on your command line. You should be able to run the following and render the entire website:

```
quarto render
# individual pages
quarto render <file>
```

## Scheduling pull requests

Given that we sometimes want to merge pull requests at specific times, especially for blog posts, there is the option to schedule a merge attempt. To do so, add an ISO8601 compliant datetime command as such to the first post in the PR: `/schedule <datetime>` (e.g., `/schedule 2026-01-01` for January 1st, 2026).