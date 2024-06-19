# FakeAlert 

## About

FakeAlert is a fake news detection app leveraging Ensemble ML models and NLP context-analysis to evaluate the credibility of news articles. With the responsive user interface built with Next.js, TypeScript, and Framer Motion and powered by Django REST API, FakeAlert provides credibility scores in real-time.

## Credibility Scores

Cross-referencing claims with reliable databases and analysing context, every news article is assigned a credibility score ranging from 0 to 100, where:
  - 0-30: Highly unreliable, likely fake.
  - 31-69: Requires further scrutiny, potentially misleading.
  - 70-100: Reliable and credible.

## Tech stack Used
- [Django REST](https://www.django-rest-framework.org/#quickstart)
- [Next.js](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [Framer Motion](https://www.framer.com/motion/examples/)
- [NextUI](https://nextui.org/docs/guide/introduction)

## Getting started

Download the [dataset](https://www.kaggle.com/datasets/jruvika/fake-news-detection/data) from Kaggle and import the libraries below, before running the fakenews.ipynb notebook.

### Importing Libraries
```sh
%pip install bayesian-optimization==1.4.1
import nltk
nltk.download('stopwords')
nltk.download('punkt')
```


### Compiling (GCC compiler) into executable files
```sh
npm install
npm run dev
```
