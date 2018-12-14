class ChangeCategoryIdToProductIdFromCctvs < ActiveRecord::Migration[5.2]
  def change
    rename_column :cctvs, :category_id, :product_id
  end
end
