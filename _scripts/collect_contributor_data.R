
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
  "geraldinegm"                 # Double account
)
# A vector of handles of contributors who contributed outside of GitHub
included_handles <- c(
  "CatalinaGU",
  "dgmascarina", # linelist logo and graphical summary
  "hawyndiaz",
  "mauricio110785",
  "modiazv",
  "Na-Nino"
)

repos <- lapply(repos, function(x) {
  if (!x$name %in% excluded_repos) {
    one_repo <- get_contributors(org = org_name, repo = x$name, check_urls = FALSE)
    Sys.sleep(5)
    return(one_repo)
  }
})

ctbs <- do.call(rbind, repos)
# Sum all the repeat contributors across repos
ctbs$contributions <- ave(ctbs$contributions, ctbs$login, FUN = sum)
# Remove duplicates
result <- ctbs[!duplicated(ctbs$logins), ]

# Use lapply to get user data and create dataframes
df_list <- lapply(included_handles, function(x) {
  user <- gh("GET /users/:username", username = x)
  data.frame(
    logins = user$login,
    contributions = NA,
    avatar = user$avatar_url,
    type = "research"
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
