class Customer < ApplicationRecord
  has_many :items, dependent: :destroy, inverse_of: :customer

  accepts_nested_attributes_for :items, allow_destroy: true

  validates_associated :items


end
