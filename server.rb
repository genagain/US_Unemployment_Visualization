require 'sinatra'
require 'pg'
require 'csv'
require 'json'
require 'pry'

def db_connection
  begin
    connection = PG.connect(dbname: "us_unemployment_db")
    yield(connection)
  ensure
    connection.close
  end
end

def month_to_int(month)
  conversion = {'dec_2012' => 23,
                'nov_2012' => 22,
                'oct_2012' => 21,
                'sept_2012' => 20,
                'aug_2012' => 19,
                'july_2012' => 18,
                'june_2012' => 17,
                'may_2012' => 16,
                'apr_2012' => 15,
                'mar_2012' => 14,
                'feb_2012' => 13,
                'jan_2012' => 12,
                'dec_2011' => 11,
                'nov_2011' => 10,
                'oct_2011' => 9,
                'sept_2011' => 8,
                'aug_2011' => 7,
                'july_2011' => 6,
                'june_2011' => 5,
                'may_2011' => 4,
                'apr_2011' => 3,
                'mar_2011' => 2,
                'feb_2011' => 1,
                'jan_2011' => 0}
  conversion[month] if conversion.keys.include?(month)
end

def state_to_int(state)
  conversion = {'Wyoming' => 0,
                'Wisconsin' => 1,
                'West Virginia' => 2,
                'Washington' => 3,
                'Virginia' => 4,
                'Vermont' => 5,
                'Utah' => 6,
                'Texas' => 7,
                'Tennessee' => 8,
                'South Dakota' => 9,
                'South Carolina' => 10,
                'Rhode Island' => 11,
                'Pennsylvania' => 12,
                'Oregon' => 13,
                'Oklahoma' => 14,
                'Ohio' => 15,
                'North Dakota' => 16,
                'North Carolina' => 17,
                'New York' => 18,
                'New Mexico' => 19,
                'New Jersey' => 20,
                'New Hampshire' => 21,
                'Nevada' => 22,
                'Nebraska' => 23,
                'Montana' => 24,
                'Missouri' => 25,
                'Mississippi' => 26,
                'Minnesota' => 27,
                'Michigan' => 28,
                'Massachusetts' => 29,
                'Maryland' => 30,
                'Maine' => 31,
                'Louisiana' => 32,
                'Kentucky' => 33,
                'Kansas' => 34,
                'Iowa' => 35,
                'Indiana' => 36,
                'Illinois' => 37,
                'Idaho' => 38,
                'Hawaii' => 39,
                'Georgia' => 40,
                'Florida' => 41,
                'District of Columbia' => 42,
                'Delaware' => 43,
                'Connecticut' => 44,
                'Colorado' => 45,
                'California' => 46,
                'Arkansas' => 47,
                'Arizona' => 48,
                'Alaska' => 49,
                'Alabama' => 50 }
  conversion[state] if conversion.keys.include?(state)
end

def get_records
  db_connection { |conn| conn.exec("SELECT * FROM unemployment_percentages;") }.to_a
end

def generate_heat_map_data
  json_data = []
  query_result = get_records
  query_result.each do |record|
    state_int = state_to_int(record["state_name"])
    record.each do |attr, value|
      unless ['id', 'state_id', 'state_name'].include?(attr)
        month_int = month_to_int(attr)
        json_data << [state_int, month_int, value.to_f]
      else
        next
      end
    end
  end
  JSON.generate(json_data)
end

def generate_us_map_data
  json_data = []
  recent_data = db_connection { |conn| conn.exec("SELECT state_id, dec_2012 FROM unemployment_percentages;") }.to_a
  recent_data.each do |state_id, rate|
    state_datum = {}
    state_datum[:value] = rate.to_f
    state_datum[:code] = state_id
    json_data << state_datum
  end
  JSON.generate(json_data)
end

get '/heat_map_demo' do
  erb :heat_map_demo
end

get '/heat_map' do
  erb :heat_map
end

get '/heat_map.json' do
  generate_heat_map_data
end

get '/us_map' do
  erb :us_map
end

get '/us_map.json' do
  generate_us_map_data
end
