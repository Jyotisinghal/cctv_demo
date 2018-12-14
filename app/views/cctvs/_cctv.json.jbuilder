json.extract! cctv, :id, :item_name, :category, :price, :created_at, :updated_at
json.url cctv_url(cctv, format: :json)
