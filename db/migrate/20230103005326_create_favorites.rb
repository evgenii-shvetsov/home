class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.references :owner, null: false, foreign_key: {to_table: :users}, index: false
      t.references :listing, null: false, foreign_key: {to_table: :listings}
      t.index [:owner_id, :listing_id], unique: true
      t.timestamps
    end
  end
end
