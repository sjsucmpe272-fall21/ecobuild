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

## Geo-safety indicator

### Problem Statement
A mobile app that will notify users if they are in a neighborhood with a high crime rate.

### Abstract
Law is something that helps maintain peace among societies. Crime is an unlawful act which is punishable by the state or other authority. Since humans have started living in civilization, we as humans have been striving to eliminate crimes.

Through this project, we aim to build a mobile application that could help in reducing crimes. The application will monitor the GPS location of the user. This location will be used to check the crime rates of the neighborhood from the dataset. After the analysis, a safety-score will be assigned to the area. If the score is above a specific threshold, the user will be notified by a push notification. The user can use this information to be cautious and take precautionary methods to be safe.

The algorithm could further be enhanced to include the profile of users in the analysis. So if the user is a minor, we can prioritize crimes like child abduction. 


### Approach
We will build an android/iOS application that will poll the GPS coordinates from the OS service at regular intervals. With these location coordinates, we can calculate the safety-score considering a 0.5 or 1 mile perimeter from the dataset.

The safety-score will be recorded on a 1-10 scale; 1 being unsafe and 10 being safest. It can be computed using the following factors (more factors can be added further post discussions):

1. Proximity of the location to the crime location
2. How recent the crimes have taken place
3. Type of crime: violent and non-violent


### Persona
Target audience would be everyone who is concerned about their safety

### Dataset links
[Sanfrancisco Crime Analysis | Kaggle](https://www.kaggle.com/roshansharma/sanfrancisco-crime-analysis/data)

[CityProtect](https://cityprotect.com/) – This site provides API to get crime data, but it may not be a free option 
 
