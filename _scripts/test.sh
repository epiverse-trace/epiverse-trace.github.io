REPOS=$(gh repo list epiverse-trace --topic r-package --json nameWithOwner --jq '.[].nameWithOwner')

for REPO in $REPOS; do
  echo "Fetching releases for $REPO"
  gh release list -R $REPO -L 1
done
