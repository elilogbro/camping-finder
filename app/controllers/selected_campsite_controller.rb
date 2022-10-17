class SelectedCampsiteController < ApplicationController
    skip_before_action :authorize
    skip_before_action :current_campsite, only: [:create]

    def create
        campsite = Campsite.find_by(id: params[:id])
        session[:campsite_id] = campsite.id
        render json: campsite, status: :ok
    end

    def destroy
        session.delete :campsite_id
        head :no_content
    end



end
