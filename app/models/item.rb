class Item < ApplicationRecord

  belongs_to :cctv
  # belongs_to :product
  belongs_to :customer, inverse_of: :items
end
