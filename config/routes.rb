Rails.application.routes.draw do
 


 resources :posts do
  collection do 
    post :json_to_post
    get :inc_rating
  end
end




 root "posts#index"

end
