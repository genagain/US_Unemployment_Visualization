require 'rubygems'
require 'pry'
require 'sinatra'
require 'pg'
require 'csv'

get "/" do
  erb :heat_map
end
