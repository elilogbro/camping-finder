class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :campsite_id
      t.string :review_summary

      t.timestamps
    end
  end
end
