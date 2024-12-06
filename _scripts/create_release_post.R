create_release_post <- function(release_endpoint_response, pkg) {

  release_date <- release_endpoint_response$published_at |>
    lubridate::ymd_hms() |>
    format("%Y-%m-%d")
  package <- basename(pkg)
  version <- release_endpoint_response$tag_name
  notes <- release_endpoint_response$body

  if (Sys.getenv("GITHUB_ENV") != "") {
    write(c(
            paste0("PACKAGE=", package),
            paste0("PACKAGE_VERSION=", version)), 
    file = Sys.getenv("GITHUB_ENV"), append = TRUE)
  }

  post_folder <- file.path("posts", paste(package, version, sep = "_"))
  dir.create(post_folder)

  knitr::knit_expand(
    file.path("_templates", "release.qmd"),
    date = release_date,
    pkgname = package,
    v = version,
    notes = notes
  ) |>
    writeLines(file.path(post_folder, "index.qmd"))

  knitr::knit(
    file.path(post_folder, "index.qmd"),
    file.path(post_folder, "index.qmd")
  )

}
