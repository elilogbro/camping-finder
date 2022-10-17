class AmenitiesController < ApplicationController
    skip_before_action :authorize
    # skip_before_action :current_campsite

    def index
        render json: Amenity.all, status: :ok
    end

end
