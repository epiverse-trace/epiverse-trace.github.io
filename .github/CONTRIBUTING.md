This website is using [quarto](https://quarto.org/) and the HTML output is automatically generated on pushes to `main` via the [`quarto-publish.yml` GitHub Actions workflow](https://github.com/epiverse-trace/epiverse-trace.github.io/blob/main/.github/workflows/quarto-publish.yml).

All contributions should add an ORCiD for each author.

## Contributing a new blog post

### Before starting to write

The first step before starting to write a blog post is to open an issue in this repository so that others can weigh in on your ideas, propose additional directions, and possibly volunteer to collaborate with you.
Once this issue is opened, please tag it with [`future post`](https://github.com/epiverse-trace/epiverse-trace.github.io/issues?q=is%3Aissue+label%3A%22future+post%22) and share it in the `#dev-general` slack channel.

### General guidance for writing blog posts

#### Scope

Try to keep your post focused concise and focus in a single issue. If you feel your post is getting too long, it is often a good idea to split it into several smaller posts linking back to one another. This often gets more views.

The aforementioned `future post` issue can help you to define the exact post of your post.

#### Posts as one part of the ecosystem 

Blog posts should as much as possible be self-contained. I.e., they should make sense on their own and not require users to go read a lot of external links to understand your point.

However, our blog doesn't live in isolation from the rest of the community and it is good practice to link back to other posts and other resources as much as possible. If someone else already wrote on the topic you're treating or an adjacent topic, or if there are resources to go deeper in this topic, you should most definitely link them back. Practically speaking, there is no upper limit on the number of external links you can add. The more the better.

When you mention other resources and the position of your post in the existing documentation ecosystem, make sure your phrasing couldn't be taken as dismissive or disparaging. Our posts aim at building up on others' work and lifting up other members of the community. 

This is in line with our [community values](https://data.org/news/epiverse-trace-a-values-based-approach-to-open-source-ecosystems/), where we committed to **reciprocity**.

#### Tone and language

We don't require a formal tone in posts. Feel free to adopt everyday vocabulary.

You should however ensure that your posts are always respectful of everybody's work, and everybody's experience, as describe in our Code of Conduct. In particular, we are paying extra attention to avoid dismissive or demotivating language, such as "obvious", "just", "straightforward", etc. The "alex" GitHub Actions workflow can help you detect and fix such occurrences of demotivating language.

### After the post is published

Once your post is published, we already have some systems in place to try and advertise it in the community:

- it is automatically shared on [R-bloggers](https://www.r-bloggers.com/)
- it is automatically shared on [R-weekly](https://rweekly.org/), which can often result in it also being discussed in the [R-weekly podcast](https://rweekly.fireside.fm/). Keep an eye on their social media account to see if your post is mentioned: [twitter](https://twitter.com/theRcast)

You should also get in touch with the current week's curator of our [Epiverse-TRACE twitter account](https://twitter.com/Epiverse_TRACE/), possibly with a short summary of your post they can use.

## Contributing slides from a presentation

Slides from presentation can be added in the `slides/` folder.
Alongside the pdf of your slides, please add an `index.qmd` with the following recommended sections:

- Schedule if the event includes multiple presenters and/or multiple presentations
- The slides in an iframe:
  - For slides in 16:9 format:
  ````
  ```{=html}
  <iframe width="780" height="438.75" src="slides.pdf" title="slides from event"></iframe>
  ```
  ````
  - For slides in 4:3 format:
  ````
  ```{=html}
  <iframe width="780" height="500" src="slides.pdf" title="slides from event"></iframe>
  ```
  ````
- A list of questions asked during the presentation and a short answer, especially if you didn't have time to answer all questions live
- A link to the recording if available
