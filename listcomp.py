import math
n = 20
triples = [ [x, y, (x**2 + y**2)**.5] for x in range(1, n) for y in range(1, n)
		if (x**2 + y**2)**.5 - math.floor((x**2 + y**2)**.5) == 0 ]

print(triples)
