
if (!require(gh)) {
    install.packages("gh")
}
if (!require(allcontributors)) {
    install.packages("allcontributors")
}

library(allcontributors)
library(gh)

org_name <- "epiverse-trace"
repos <- gh(
  "GET /orgs/:org/repos",
  org = org_name,
  # We do not want to count contributions for forks from external orgs.
  type = "sources",
  per_page = 100
)
# A vector of repo names in the organization that we do not include
excluded_repos <- c(
  "testpkg"
)
# A vector of handles that we do not include
excluded_handles <- c(
  "abdoelnaser-mahmood-degoot", # Double account
  "geraldinegm",                # Double account
  "TimTaylor"                   # Requested
)
# A vector of handles of contributors who contributed outside of GitHub
included_handles <- c(
  "CatalinaGU",
  "dgmascarina", # linelist logo and graphical summary
  "hawyndiaz",
  "krlmlr", # https://github.com/epiverse-trace/linelist/commit/314c4b75f01b1473e60b6850946dd085f71e6fd8#r141430850
  "mauricio110785",
  "modiazv",
  "Na-Nino"
)

repos <- lapply(repos, function(x) {
  if (!x$name %in% excluded_repos) {
    one_repo <- get_contributors(org = org_name, repo = x$name, check_urls = FALSE)
    # It seems we are hitting GitHub API rate limit. We circumvent this issue with Sys.sleep() for now
    # but keep an eye on https://github.com/ropenscilabs/allcontributors/issues/36 for a potentially
    # better solution.
    Sys.sleep(5)

    # Add the repo name
    one_repo$repo <- x$name

    return(one_repo)
  }
})

ctbs <- do.call(rbind, repos)

result <- ctbs |>
  dplyr::summarise(
    type = toString(unique(sort(type))),
    repo = toString(unique(sort(repo))),
    avatar = dplyr::first(avatar),
    .by = logins
  )

# Use lapply to get user data and create dataframes
df_list <- lapply(included_handles, function(x) {
  user <- gh("GET /users/:username", username = x)
  data.frame(
    logins = user$login,
    type = NA,
    repo = NA,
    avatar = user$avatar_url
  )
})

# Bind all dataframes together
result <- do.call(rbind, c(list(result), df_list))

# sort by handle
sorted <- result[order(tolower(result$logins)), ]

# custom removal rules
sorted <- sorted[!sorted$logins %in% excluded_handles, ]

# write out the data frame
write.csv(sorted, file = "_data/epiverse_contributors.csv", row.names = FALSE)
