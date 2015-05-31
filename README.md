### geoCrimeMap


### Requirements
* sinatra `gem install sinatra`
* Have access to a local police departments recent arrest records (Sometimes they require an API access or commercial access view the recent police reports).
  My local police reports are scraped directory off an HTML crime report that is publically published for the local city to view and access.
  Most of the time it takes police departments a day or 2 to post criminal reports, that's why I pull crimes for the last several days rather than one day at a time.



### Setup

The most important factor is a [Mapbox](https://www.mapbox.com/) access_token is required for displaying the map and getting [lat,long] locations.

* Add the access_token to  `fetch_crimes.rb` on line [82] `"access_token"`
* You will also need to add the access_token to `/assets/js/app.js` on line [70] `"L.mapbox.accessToken"`
* Access to a database or publicly available criminal listing of recent crimes within the area, put that URL in `fetch_crimes.rb` line [85] and adjust your Nokogiri/xpath processing accordingly.

**Note:** Both of these variable assignments are pretty self explanatory seeing as how they are labeled "access_token"


Next make sure all required gems are installed by using the following command `bundle install`


Run the following command in order to get the latest Crime results
```shell
ruby fetch_crimes.rb
```

In order to initiate the server

```shell
foreman start

|or|

ruby crime_app.rb
```

You can now access the CrimeMap by visiting  [http://localhost:8000](http://localhost:8000)
