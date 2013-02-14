class TiffanyController < ApplicationController
  def start
  end

  def index

  	if !session[:is_tiffany]
  		redirect_to root_url, :notice => "Ahh...I forget who you are. Do you mind proving you really are who you say you are again?"
  		return
  	end

  end
end
