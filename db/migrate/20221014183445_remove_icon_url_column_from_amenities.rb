class RemoveIconUrlColumnFromAmenities < ActiveRecord::Migration[7.0]
  def change
    remove_column :amenities, :icon_url
  end
end
