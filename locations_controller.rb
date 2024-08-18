class LocationsController < ApplicationController
  def index
  end

  def locate
    @location = Geocoder.search(params[:address]).first

    respond_to do |format|
      format.js
    end
  end
end
