---
created_at: "2020-04-23T13:57:13-05:00"
tags:
  - gh 
---

# Set default editor for `gh` (Github CLI)

The github official cli normally uses `nano` as the default editor. Now there is an option to change it here:

```shell
gh config set editor vim
```

where the last value would be whatever editor you prefer. [Source](https://github.com/cli/cli/issues/309#issuecomment-618461842)
