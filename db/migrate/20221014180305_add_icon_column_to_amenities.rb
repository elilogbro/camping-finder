class AddIconColumnToAmenities < ActiveRecord::Migration[7.0]
  def change
    add_column :amenities, :icon_url, :string
  end
end
