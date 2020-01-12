## `@todo`
* [x] `finished local task1 description`
* [ ] `local task2 description`
* [ ] [`<reponame>#<issueNumber>` <issueTitle>](https://github.com/<orgname>/<reponame>/issues/<issueNumber>)

---

# `delete this` after reading description:
about how to use this issue structure

```md
## `@todo`
* [ ] <local task1>
* [ ] <local task1>
* [ ] [`<reponame>#<issueNumber>` <issueTitle>](https://github.com/<orgname>/<reponame>/issues/<issueNumber>)

---
...more infos here...
```

1. we don't care about or use labels at all
2. in an organisation, there is one main issue that links to one or more major project aspect issues
3. project aspect issues link to more sub issues
4. sub issues at some point have atomic todo lists
5. We pin the one main issue on each repository
6. The main issues is always named: `roadmapping`
7. after the last `---` seperator line in an issue, we write any context information and all kinds of stuff that relates to the issue
8. That way - no matter how you make issues and structure them,
  * they form a tree with one root and you can open any of them
  * and always see a todo list on top with atomic todos and some todos linking to sub issues
9. We don't have isolated issues disconnected from the projects issue tree

**We figured out, that all the special annotation and tags and stuff become irrelevant once you work like this,
but feel free to use them if you think that makes sense for you...**
