class AmenitiesController < ApplicationController
    skip_before_action :authorize

    def index
        render json: Amenity.all, status: :ok
    end

end
