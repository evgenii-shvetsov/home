class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.references :owner, null: false, foreign_key: {to_table: :users}
      t.string :status, null: false
      t.string :deal_type, null: false
      t.text :description, null: false
      t.integer :zip, null: false
      t.string :state, null: false
      t.string :city, null: false
      t.string :address, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :bedroom, null: false
      t.string :bathroom, null: false
      t.float :size, null: false
      t.integer :year_built, null: false
      t.integer :price, null: false
      t.string :listing_type, null: false
      t.timestamps
    end
  end
end
