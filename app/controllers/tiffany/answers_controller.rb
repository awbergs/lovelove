class Tiffany::AnswersController < TiffanyController

  ANSWERS = { #question_id : correct_answer
    "1" => "1",
    "2" => "2",
    "3" => "4",
    "4" => "4"
  }

  WRONG_ANSWER_TEXTS = [

    "<strong>WRONG!</strong> Nice. Lie on the internet about who you are. Real original.",
    "Maybe you should do some more research. You don't seem to know much about <strong>yourself</strong>.",
    "Confucious say: <strong>LIAR!</strong>",
    "Alright...it appears you aren't who you say you are. I'm going to call <a href='http://www.mtv.com/shows/catfish/series.jhtml' target='_blank'>Catfish</a> and get this sorted out. Can you hang around for a few minutes?"

  ]

  CHEATER_TEXTS = [

    "<strong>Ahhh...</strong> We either have someone who's very impatient to prove they are the love of my life, or someone who is using some mental prowess to try to hack the system...<br/><br/>Either way I'm disappointed in you."

  ]

  CORRECT_ANSWER_TEXTS = [
    "<strong>CORRECT!</strong> On to the next one...",
    "Way.To.Go.<br/><br/>I.Da.Ho.",
    "You certainly <strong>appear</strong> to be Tiffany...but I also just woke up and you know how that can be...<br/><br/>Actually you would only know how that can be if you were Tiffany. Crap."
  ]

  def answer

    if !valid_referrer?
      redirect_to root_url, :notice => get_random_cheater_text
      return
    end

    if ANSWERS[params[:id]] == params[:answer]
      redirect_to "/tiffany/questions/#{params[:id].to_i + 1}", :notice => get_random_correct_answer_text
    else
      redirect_to root_url, :notice => get_random_wrong_answer_text
      return
    end

  end

  private

  def valid_referrer?
    return request.referrer.present? && request.referrer.index("/tiffany/questions/#{params[:id]}") >= 0
  end

  def get_random_wrong_answer_text
    WRONG_ANSWER_TEXTS[rand(WRONG_ANSWER_TEXTS.length)]
  end

  def get_random_cheater_text
    CHEATER_TEXTS[rand(CHEATER_TEXTS.length)]
  end

  def get_random_correct_answer_text
    CORRECT_ANSWER_TEXTS[rand(CORRECT_ANSWER_TEXTS.length)]
  end

end
