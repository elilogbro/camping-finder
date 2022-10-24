class AmenitiesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record_error
    
    skip_before_action :authorize
    skip_before_action :current_campsite

    def index
        render json: Amenity.all.uniq { |amenity| [amenity.name] }, status: :ok
    end

    def create
        amenity = Amenity.create!(amenity_params)
        render json: amenity, status: :created
    end

    private

    def amenity_params
        params.permit(:campsite_id, :name)
    end

    def invalid_record_error(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

end
