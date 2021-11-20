---
created_at: "2020-04-23T13:55:31-05:00"
tags:
  - VSCode
---

# Custom Matcher in Rspec

```ruby
  RSpec::Matchers.define :match_object_by_id do |expected|
    match { |actual| [actual.id](http://actual.id/) == [expected.id](http://expected.id/) }
  end
```
