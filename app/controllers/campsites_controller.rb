class CampsitesController < ApplicationController
    def index
        render json: Campsite.all, status: :ok
    end
end
