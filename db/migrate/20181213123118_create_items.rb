class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer :customer_id
      t.integer :cctv_id
      t.integer :category_id
      t.integer :price
      t.integer :quantity

      t.timestamps
    end
  end
end
