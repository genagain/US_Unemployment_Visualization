require 'pry'
require 'pg'
require 'csv'

def db_connection
  begin
    connection = PG.connect(dbname: "us_unemployment_db")
    yield(connection)
  ensure
    connection.close
  end
end

def add_state(state_name,
              state_id,
              dec_2012,
              nov_2012,
              oct_2012,
              sept_2012,
              aug_2012,
              july_2012,
              june_2012,
              may_2012,
              apr_2012,
              mar_2012,
              feb_2012,
              jan_2012,
              dec_2011,
              nov_2011,
              oct_2011,
              sept_2011,
              aug_2011,
              july_2011,
              june_2011,
              may_2011,
              apr_2011,
              mar_2011,
              feb_2011,
              jan_2011)
  db_connection do |conn|
    conn.exec("INSERT INTO articles ( state_name,
                                      state_id,
                                      dec_2012,
                                      nov_2012,
                                      oct_2012,
                                      sept_2012,
                                      aug_2012,
                                      july_2012,
                                      june_2012,
                                      may_2012,
                                      apr_2012,
                                      mar_2012,
                                      feb_2012,
                                      jan_2012,
                                      dec_2011,
                                      nov_2011,
                                      oct_2011,
                                      sept_2011,
                                      aug_2011,
                                      july_2011,
                                      june_2011,
                                      may_2011,
                                      apr_2011,
                                      mar_2011,
                                      feb_2011,
                                      jan_2011 )
              VALUES ( $1,
                       $2,
                       $3,
                       $4,
                       $5,
                       $6,
                       $7,
                       $8,
                       $9,
                       $10,
                       $11,
                       $12,
                       $13,
                       $14,
                       $15,
                       $16,
                       $17,
                       $18,
                       $19,
                       $20
                       $21,
                       $22,
                       $23,
                       $24,
                       $25,
                       $26)",
                       [ state_name,
                         state_id,
                         dec_2012,
                         nov_2012,
                         oct_2012,
                         sept_2012,
                         aug_2012,
                         july_2012,
                         june_2012,
                         may_2012,
                         apr_2012,
                         mar_2012,
                         feb_2012,
                         jan_2012,
                         dec_2011,
                         nov_2011,
                         oct_2011,
                         sept_2011,
                         aug_2011,
                         july_2011,
                         june_2011,
                         may_2011,
                         apr_2011,
                         mar_2011,
                         feb_2011,
                         jan_2011 ])
  end
end

def read_csv(file_name)
  states = []
  CSV.foreach(file_name, headers: true, header_converters: :symbol) do |state|
    states << state.to_hash
  end
  states
end

states = read_csv('good_viz_data.csv')
binding.pry


