class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authorize
    before_action :current_campsite

    private

    def authorize
      @current_user ||= User.find_by(id: session[:user_id])
      render json: {errors: "Not authorized"}, status: :unauthorized unless @current_user
    end

    def current_campsite
      @current_campsite ||= Campsite.find_by(id: session[:campsite_id])
      render json: {errors: "No campsite found"}, status: :not_found unless @current_campsite
    end
    
end
