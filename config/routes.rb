Rails.application.routes.draw do
  get 'home/index'
  get 'tools/index'

  resources :tools

  root 'home#index'
  get "/*slug" => "home#index",
      param: :slug,
      as: "home",
      contraints: lambda { |req|
        req.path.exclude? "home/index"
      }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
