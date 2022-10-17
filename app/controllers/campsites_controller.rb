class CampsitesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record_error
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_error
    
    skip_before_action :authorize

    def index
        render json: Campsite.all, status: :ok
    end

    def show
        render json: Campsite.find(params[:id]), status: :ok
    end

    def create
        campsite = Campsite.create!(campsite_params)
        render json: campsite, status: :created
    end

    private

    def campsite_params
        params.permit(:lat, :long, :city_state, :type_id, :description, :elevation, :name, :price)
    end

    def invalid_record_error(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

    def not_found_error(invalid)
        render json: {errors: invalid}, status: :not_found
    end
end
