class TypesController < ApplicationController
    skip_before_action :authorize
    skip_before_action :current_campsite

    def index
        render json: Type.all, status: :ok
    end
end
