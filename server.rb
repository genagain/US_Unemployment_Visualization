require 'rubygems'
require 'pry'
require 'sinatra'
require 'pg'
require 'csv'

get '/heat_map_demo' do
  erb :heat_map_demo
end

get '/heat_map' do
  erb :heat_map
end
