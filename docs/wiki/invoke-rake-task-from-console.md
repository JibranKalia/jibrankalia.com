---
created_at: "2020-04-30T11:08:19-05:00"
tags:
  - Rake
---
# Invoke Rake Task from Console

```ruby
  Rails.application.load_tasks
  Rake::Task["namespaced:task_name"].invoke(arg_1, arg_2)
```
