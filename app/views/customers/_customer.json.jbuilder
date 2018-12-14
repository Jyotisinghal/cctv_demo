json.extract! customer, :id, :name, :contact, :email, :address, :created_at, :updated_at
json.url customer_url(customer, format: :json)
