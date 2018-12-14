class Product < ApplicationRecord
  has_one :cctv
  belongs_to :item
end
