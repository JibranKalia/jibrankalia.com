---
created_at: "2020-04-23T13:55:31-05:00"
tags:
  - JQ
  - JSON
---

# JQ Examples

```shell
  cat surah.json | jq '[.[] | { number: .number, name: .name, transliteration: .transliteration_en, simplified_transliteration: .transliteration_en | sub(".*-";""), translation_en: .translation_en, totalVerses: .total_verses, revelation_type: .revelation_type }]'
```
