class ChangeProductIdToCctvIdFromItems < ActiveRecord::Migration[5.2]
  def change
    rename_column :items, :product_id, :cctv_id
  end
end
