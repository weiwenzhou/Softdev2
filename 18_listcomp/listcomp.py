# Wei Wen Zhou
# Softdev pd8
# K18 -- Getting Clever with List Comprehensions
# 2019-04-16

import math, random

def triples(n):
	return [ [x, y, (x**2 + y**2)**.5] for x in range(1, n) for y in range(x, n)
			if (x**2 + y**2)**.5 - math.floor((x**2 + y**2)**.5) == 0 and (x**2 + y**2)**.5 < n ]

print(triples(20))

def quicksort(list):
	return [val for i in range(len(list)) for val in list if len([x for x in list if x < val]) == i]

list = [5,4,12,17,39,31,14]
print(quicksort(list))
print()

randList = []
for x in range(100):
	randList.append(random.randint(0, 100))

print(randList)
print(quicksort(randList))
