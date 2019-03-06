# WorldWarZ - Thomas Zhao and Wei Wen Zhou
# SoftDev pd8
# K07 -- Import/Export Bank
# 03/04/2019

'''Our data set is very simple. It is a dataset of movies with the following information:
       title, year, cast, genre.

   The raw data is held here: https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json

   The way we imported the information is through opening a connection to the server address.
   We then created the db WorldWarZ and then the collections movies.
   After that, we opened the .json file, read it, and inserted it into the collection.'''

import json, pymongo, pprint

SERVER_ADDR = "157.230.219.18"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.WorldWarZ
collection = db.movies

with open('movies.json') as file:
    file_data = json.load(file)

collection.insert(file_data)

def by_title(title): #prints out movies with specified title
    for doc in collection.find( {"title": title} ):
        pprint.pprint(doc)
        print('\n')
    

def by_year(year): #prints out movies released in specified year
    for doc in collection.find( {"year": year} ):
        pprint.pprint(doc)
        print('\n')


def by_actor(actor): #prints out movie with specified actor 
    for doc in collection.find( {"cast": actor } ):
        pprint.pprint(doc)
        print('\n')


def by_genre(genre): #prints out movies with specified genre
    for doc in collection.find( {"genres": genre} ):
        pprint.pprint(doc)
        print('\n')

def by_title_and_year(title, year): #prints out movies with specified title and year
    for doc in collection.find( { '$and': [ {"title": title}, {"year": year} ] } ):
        pprint.pprint(doc)
        print('\n')

def by_actor_and_year(actor, year): #prints out movies with specified title and year
    for doc in collection.find( { '$and': [ {"cast": actor}, {"year": year} ] } ):
        pprint.pprint(doc)
        print('\n')

def by_between_years(earlier, later): #prints out movies between specified years, inclusive
    for doc in collection.find( { '$and': [ {"year": { '$gte': earlier } }, { "year": { '$lte': later } } ] } ):
        pprint.pprint(doc)
        print('/n')
        
#Testing
#by_title("Jack the Giant Slayer")
#by_year(2001)
#by_actor("Hugh Jackman")
#by_genre("Animated")
#by_title_and_year('Jack the Giant Slayer', 2013)
#by_actor_and_year("Josh Brolin", 2013)
#by_between_years(2000, 2001)
