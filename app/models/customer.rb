class Customer < ApplicationRecord
  has_many :items,  inverse_of: :customer, dependent: :destroy

  accepts_nested_attributes_for :items, allow_destroy: true

  validates_associated :items
end
