# == Schema Information
#
# Table name: favorites
#
#  id         :bigint           not null, primary key
#  owner_id   :bigint           not null
#  listing_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Favorite < ApplicationRecord
    validates :owner_id, uniqueness: { scope: :listing_id }
    
    belongs_to :user,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

    belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Listing
end
