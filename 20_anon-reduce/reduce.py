# Wei Wen Zhou
# Softdev pd8
# K20 -- Reductio ad Absurdum
# 2019-4-17

import functools
with open("pg17157.txt") as file:
    words = [word for line in file for word in line.split(" ")]
#print(words)

#ok finds frequency of a word in the list
def freq(word):
    list = words.copy()
    list.insert(0,0)
    return functools.reduce((lambda a,b: a+1 if word.upper() in b.upper() else a),list)


#testing to see if the reduce is the same as the for
def forfreq(a):
    count = 0
    for word in words:
        if(a.upper() in word.upper()):
            count=1 + count
    return count

print(freq("gutenberg"))
print(freq("the"))
print(freq("eBooks"))

group = ["gutenberg","the","eBooks"]
#find the frequency of all the words in a list
def groupFreq(group):
    group.insert(0,0)
    return functools.reduce((lambda a,b:a + freq(b)),group)

print(groupFreq(group))

#should find most frequent thing
def mostFrequent():
    #i didnt care to parse the entire thing cus it takes a while
    return functools.reduce((lambda a,b:a if freq(a) > freq(b) else b),words[:20])

print(mostFrequent())
print(words[:20])
