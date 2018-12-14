class ChangeItemNameToCategoryIdFromCctvs < ActiveRecord::Migration[5.2]
  def change
    rename_column :cctvs, :item_name, :category_id
  end
end
