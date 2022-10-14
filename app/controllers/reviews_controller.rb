class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record_error
    
    skip_before_action :authorize, only: [:index, :show]

    def index
        render json: Review.all.order(created_at: :desc), status: :ok
    end

    def show
        render json: Review.find(params[:id]), status: :ok
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    private

    def review_params
        params.permit(:user_id, :campsite_id, :review_summary)
    end

    def invalid_record_error(error)
        render json: {error: error.message}, status: :unprocessable_entity
    end

end
