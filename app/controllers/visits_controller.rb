class VisitsController < ApplicationController
    skip_before_action :authorize
    skip_before_action :current_campsite
end
