class AddProductNameToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :product_name, :string
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
