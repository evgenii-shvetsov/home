# == Schema Information
#
# Table name: listings
#
#  id           :bigint           not null, primary key
#  owner_id     :bigint           not null
#  status       :string           not null
#  deal_type    :string           not null
#  description  :text             not null
#  zip          :integer          not null
#  state        :string           not null
#  city         :string           not null
#  address      :string           not null
#  lat          :float            not null
#  lng          :float            not null
#  bedroom      :string           not null
#  bathroom     :string           not null
#  size         :float            not null
#  year_built   :integer          not null
#  price        :integer          not null
#  listing_type :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Listing < ApplicationRecord

    belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

    validates :status, :deal_type, :description, :zip, :state , :city, :address, :lat, :lng, :bedroom, :bathroom, :size, :year_built, :price, :listing_type, presence: true

end
