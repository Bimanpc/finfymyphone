Rails.application.routes.draw do
  root 'locations#index'
  post 'locate', to: 'locations#locate'
end
