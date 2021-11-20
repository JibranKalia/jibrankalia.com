---
created_at: "2020-06-18T12:31:30-05:00"
tags:
  - Sequel
  - Ruby
---

# Sequel Commands

## Migrations

### Index

When creating a table:

```ruby
create_table :cars do
  column :make, :text, null: false
  index :make, unique: true
end
```

When modifying a table:

```ruby
alter_table :cars do
  add_index :make
end
```
