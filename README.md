# ChatSpace DB 設計

## users テーブル

| Column   | Type   | Options                   |
| -------- | ------ | ------------------------- |
| email    | string | null: false, unique: true |
| password | string | null: false               |
| name     | string | null: false, index: true  |

### Association

- has_many :messages
- has_many :group_users
- has_many :groups, through: :group_users

## groups テーブル

| Column | Type   | Options                   |
| ------ | ------ | ------------------------- |
| name   | string | null: false, unique: true |

### Association

- has_many :messages
- has_many :group_users
- has_many :users, through: :group_users

## group_users テーブル

| Column | Type       | Options                        |
| ------ | ---------- | ------------------------------ |
| group  | references | null: false, foreign_key: true |
| user   | references | null: false, foreign_key: true |

### Association

- belongs_to :group
- belongs_to :user

## messages テーブル

| Column | Type       | Options                        |
| ------ | ---------- | ------------------------------ |
| body   | text       |                                |
| image  | string     |                                |
| group  | references | null: false, foreign_key: true |
| user   | references | null: false, foreign_key: true |

### Association

- belongs_to :group
- belongs_to :user
