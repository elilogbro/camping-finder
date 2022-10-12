class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :campsite_id, :review_summary
end
