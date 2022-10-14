class Review < ApplicationRecord
    belongs_to :campsite
    belongs_to :user

    validates :review_summary, presence: true
end
