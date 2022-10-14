class TypesController < ApplicationController
    skip_before_action :authorize

    def index
        render json: Type.all, status: :ok
    end
end
