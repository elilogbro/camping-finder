class ReviewSerializer < ActiveModel::Serializer
  attributes :review_summary, :id, :formatted_created_at

  belongs_to :user

  def formatted_created_at
    self.object.created_at.strftime("%B %-d, %Y")
  end
end
