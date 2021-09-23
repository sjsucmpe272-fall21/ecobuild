# Team-Project-9


# Idea - 1

## ./Assess

### Problem Statement
Automated Assessment System for programming assignments.

### Abstract
We as software engineering students have a lot of assigments in which we have to code. After giving it a thought, we have realised that the professor/instructor/grader has the harder job which is to review 100s of students code individually and test if they are giving the desired output. We want to make this process easier for professor/instructor/grader by building an automated system for this problem statement and try to save as much time as possible.

### Approach
The professor/instructor/grader has to upload/commit an input and output file. The students have to submit/commit their assigment after testing out on their local machines. After this, we concurrently try and run as many assignments as possible with the input given by the professor/instructor/grader to make it faster. We will run each and every assigment and compare it with the output share by the professor/instructor/grader. After this a report will be generated for the professor/instructor/grader.

### Persona
This tool will be very helpful for professors who teach courses which include coding.



# Idea - 2

## CryptoShots

### Problem Statement
There are soo many cryptocurrency exchanges in the US alone. Many users have difficulty figuring out which is the best exchange as there there are many factors like the fees of the exchange for every buy/sell, the number of currencies supported by the exchange, etc.

### Abstract
We plan to aggregate all the coins, rates, fees, and other important factors for around 2 to 3 exchanges to start with. Our website will be a one-stop place to see different rates offered by the different exchanges. We will also implement functionality in which users can see the best buy/sell rate out of all the supported exchanges for a particular cryptocurrency. 

### Approach
We will be using the free public APIs provided by the exchanges like Binance to aggregate all the ticker data every 5 seconds in a time-series database. We will have a front end built on ReactJS to get all the required data from the backend and display it to the users. We will also have historic data for each cryptocurrency and will be displayed using a graph in the frontend so that users can see the trend. We will also implement ‘Watchlist’ functionality so that users can monitor their favorite cryptocurrencies.

### Persona
Anyone who wants to monitor prices of cryptocurrencies, invest/trade in them, want to trade between exchanges, etc.



# Idea - 3

## Better Tomorrow

### Problem Statement
Many people lack environmental awareness because there are no popular platforms that educate them with relevant and location-based information.

### Abstract
Climate change is one of the most alarming issues we face today, and many lack awareness on the topic. The project aims to be a source for educating people who show enthusiasm for a better cause. It includes insightful data points such as Active Wildfires, Air Quality, Power Plants, and Fuel Stations. It also provides related news articles, news, and advice; everything is based on the user's location. This information could be of great use to the general public as it can inspire the current and future generations to take action for a better future.
The algorithm could further be enhanced to include the profile of users in the analysis. So if the user is a minor, we can prioritize crimes like child abduction. 


### Approach
All the information is aggregated into maps for better visualization. The data is fetched from ArcGIS APIs in real-time, and the articles, news, and advice are fetched from the news API. All the API responses are based on the user's location. Additionally, a user authentication system is integrated into the project to ensure security. NodeJS will be used for the backend, and React will be used for the frontend.


### Persona
The project is targeted towards anyone who seeks to get environmental information around the user's location.

### Dataset links
Not applicable as data is fetched in real-time.
