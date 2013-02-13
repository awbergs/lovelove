class Tiffany::QuestionsController < TiffanyController
  def question

  	question_id = params[:id].to_i

  	if question_id > 1

  		if request.referrer.nil?
  			referrer = ""
  		else
  			referrer = request.referrer
  		end

	  	referring_question = referrer.split("/").last.to_i

	  	if referring_question != question_id - 1

	  		redirect_to root_url, :notice => "Hah! Nice try hacky hackenstein..."

	  		return

	  	end

  	end

  	render "question_#{params[:id]}"

  end
end
