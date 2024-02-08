
if (!require(gh)) {
    install.packages("gh")
}
if (!require(allcontributors)) {
    install.packages("allcontributors")
}

library(allcontributors)
library(gh)

org_name <- "epiverse-trace"
repos <- gh("GET /orgs/:org/repos", org = org_name, .limit = 100)
# A vector of repo names in the organization that we do not include
# This is because they are forks from external orgs, for example.
excluded_repos <- c(
    "sandpaper",
    "testpkg",
    "varnish"
)

repos <- lapply(repos, function(x) {
    if (!x$name %in% excluded_repos) {
        one_repo <- get_contributors(org = org_name, repo = x$name)
        return(one_repo)
    }
})


ctbs <- do.call(rbind, repos)
# Sum all the repeat contributors across repos
ctbs$contributions <- ave(ctbs$contributions, ctbs$login, FUN = sum)
# Remove duplicates
result <- ctbs[!duplicated(ctbs$logins), ]
# sort by handle
sorted <- result[order(result$logins),]

# write out the data frame
write.csv(sorted, file = "_data/epiverse_contributors.csv", row.names = FALSE)
