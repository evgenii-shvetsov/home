# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_03_005326) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: :cascade do |t|
    t.bigint "owner_id", null: false
    t.bigint "listing_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["listing_id"], name: "index_favorites_on_listing_id"
    t.index ["owner_id", "listing_id"], name: "index_favorites_on_owner_id_and_listing_id", unique: true
  end

  create_table "listings", force: :cascade do |t|
    t.bigint "owner_id", null: false
    t.string "status", null: false
    t.string "deal_type", null: false
    t.text "description", null: false
    t.integer "zip", null: false
    t.string "state", null: false
    t.string "city", null: false
    t.string "address", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.string "bedroom", null: false
    t.string "bathroom", null: false
    t.float "size", null: false
    t.integer "year_built", null: false
    t.integer "price", null: false
    t.string "listing_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_listings_on_owner_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "favorites", "listings"
  add_foreign_key "favorites", "users", column: "owner_id"
  add_foreign_key "listings", "users", column: "owner_id"
end
