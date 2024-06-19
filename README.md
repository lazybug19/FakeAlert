# FakeAlert 

## About

FakeAlert is a fake news detection app leveraging Ensemble ML models and NLP context-analysis to evaluate the credibility of news articles. With the responsive user interface built with Next.js, TypeScript, and Framer Motion and powered by Django REST API, FakeAlert provides credibility scores in real-time.

## Credibility Scores

Cross-referencing claims with reliable databases and analysing context, every news article is assigned a credibility score ranging from 0 to 100, where:
  - 0-30: Highly unreliable, likely fake.
  - 31-69: Requires further scrutiny, potentially misleading.
  - 70-100: Reliable and credible.

## Getting started

Download the [dataset](https://www.kaggle.com/datasets/jruvika/fake-news-detection/data) from Kaggle.

### Installing Libraries
```sh
%pip install bayesian-optimization==1.4.1
import nltk
nltk.download('stopwords')
nltk.download('punkt')
```

### Compiling (GCC compiler) into executable files
```sh
gcc -o table.out table.c
gcc -o waiter.out waiter.c
gcc -o admin.out admin.c
gcc -o hotelmanager.out hotelmanager.c
```

### Running executable files
```sh
table.out
waiter.out
admin.out
hotelmanager.out
```
## How to run?

### For table process
Upon executing the table process, enter a positive integer when prompted :
```sh
Enter Table Number:
Enter Number of Customers at Table:
```

The table process will read the menu from the pre-created menu.txt file, and each customer process orders when prompted :
```sh
Enter the serial number(s) of the item(s) to order from the menu. Enter -1 when done:
```
### For waiter process
Upon executing the waiter process, enter a positive integer when prompted :
```sh
Enter Waiter ID:
```

Once the correct order is received by the waiter process, it calculates the total bill amount of the table and displays :
```sh
Bill Amount for Table X: Y
```
### For hotel manager process
Upon executing the hotel-manager process, enter a positive integer when prompted :
```sh
Enter the Total Number of Tables at the Hotel:
```

On receiving intimation of termination from admin process and only when there are no customers at the hotel, the hotel manager process calculates the total earnings :
```sh
Total Earnings of Hotel: X
Total Wages of Waiters: Y
Total Profit: Z
```
### For admin process
Admin process will keep running along with the table, customer, waiter and hotel manager processes and only one instance of this program is executed when prompted :
```sh
Do you want to close the hotel? Enter Y for Yes and N for No.
```
