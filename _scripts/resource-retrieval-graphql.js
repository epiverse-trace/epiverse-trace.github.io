const fs = require("fs");

// PAT only needs access to read issues
const pat = process.env.GITHUB_TOKEN;

const arg = process.argv[2];
// Default to the announcements category
const category = arg ? arg : "Announcements";

async function fetchDiscussions(afterCursor) {
  const query = `
  {
    repository(owner: "epiverse-trace", name: "epiverse-trace.github.io") {
      discussions(first: 100, after: ${afterCursor ? '"' + afterCursor + '"' : null}, orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
          id
          title
          url
          createdAt
          labels(first: 10) {
            nodes {
              name
            }
          }
          author {
            login
          }
          category {
            name
          }
          upvoteCount
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${pat}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();
  const discussions = json.data.repository.discussions.nodes;
  const { endCursor, hasNextPage } = json.data.repository.discussions.pageInfo;

  if (hasNextPage) {
    return discussions.concat(await fetchDiscussions(endCursor));
  } else {
    return discussions;
  }
}

// When there are no next pages, process the responses
fetchDiscussions(null).then((discussions) => {
  let filteredDiscussions = discussions.filter(
    (discussion) => discussion.category.name === category,
  );

  // Prepare the array for processing
  filteredDiscussions = filteredDiscussions.map((discussion) => ({
    ...discussion,
    author: discussion.author.login,
    category: discussion.category.name,
    labels: discussion.labels.nodes.map((label) => label.name).join(", "),
  }));

  // Ensure directory exists
  try {
  fs.mkdirSync('resources/');
  } catch {
    console.log('resources/ already exists')
  }

  filteredDiscussions.forEach((discussion) => {
    fs.writeFile(
      `resources/${discussion.id}.qmd`,
      `---
title: "${discussion.title}"
url: ${discussion.url}
date: "${discussion.createdAt.substr(0,10)}"
author: ${discussion.author}
categories: [${discussion.labels}]
upvotes: ${discussion.upvoteCount}
---`,
      (err) => {
        if (err) throw err;
        console.log(`resources/${discussion.id}.qmd saved`);
      },
    );
  });
});
