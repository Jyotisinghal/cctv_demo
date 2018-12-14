class ChangeCctvIdToProductIdFromItems < ActiveRecord::Migration[5.2]
  def change
    rename_column :items, :cctv_id, :product_id
  end
end
