class Tiffany::QuestionsController < TiffanyController

  HACK_TEXTS = [
    "Hah! Nice try hacky hackenstein...",
    "<strong>PLEASE</strong> I'm way more prepared than you think. I will <strong>not</strong> let you cheat the system.",
    "Wait...who uses the url bar anymore? You must be from 1999."
  ]
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

	  		redirect_to root_url, :notice => HACK_TEXTS[rand(HACK_TEXTS.length)]

	  		return

	  	end

  	end

  	render "question_#{params[:id]}"

  end
end
