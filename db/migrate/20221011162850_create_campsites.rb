class CreateCampsites < ActiveRecord::Migration[7.0]
  def change
    create_table :campsites do |t|
      t.string :lat
      t.string :long
      t.string :city_state
      t.integer :type_id
      t.string :description
      t.integer :elevation
      t.string :name
      t.integer :price

      t.timestamps
    end
  end
end
