# Wei Wen Zhou
# Softdev pd8
# K17 - PPFTLCW
# 2019-04-15

def check(ans, val):
    print("expected", ans)
    print("value", val)
    print(ans == val)
# 1.
first = ['00', '22', '44', '66', '88']
first1 = [ str(2*x) + str(2*x) for x in range(5)]
first2 = []
for x in range(5):
    first2.append(str(2*x) + str(2*x))

print("1.")
check(first, first1)
check(first, first2)
print()
print()


# 2.
second = [7, 17, 27, 37, 47]
second1 = [ 10*x + 7 for x in range(5)]
second2 = []
for x in range(5):
    second2.append(10*x+7)

print("2.")
check(second, second1)
check(second, second2)
print()
print()

# 3.
third = [0,0,0,0,1,2,0,2,4]
third1 = [ x*y for x in range(3) for y in range(3)]
third2 = []
for x in range(3):
    for y in range(3):
        third2.append(x*y)

print("3.")
check(third, third1)
check(third, third2)
print()
print()

# 4.
# Composite #s on range [0, 100] in ascending order
fourth1 = [ x for x in range(2, 101) if x in [ x for x in range(2,101) for y in range(2, x) if x%y == 0 ] ]
fourth2 = []
for x in range(2, 101):
    for y in range(2, x):
        if x%y == 0 and x not in fourth2:
            fourth2.append(x)

print("4.")
check(fourth2, fourth1)
print()
print()

# 5.
# Prime #s on range [0, 100] inn ascending order
fifth1 = [x for x in range(2, 101) if 0 not in [x%y for y in range(2,x)] ]
fifth2 = []
fifth2.append(2)
for x in range(2, 101):
    prime = True
    for y in range(2, x):
        if x % y == 0:
            prime = False
        if prime and x not in fifth2 and y == x-1:
            fifth2.append(x)

print("5.")
check(fifth1, fifth2)
print()
print()

# 6. All divisors of a number
number = 60
sixth = [2,3,4,5,6,10,12,15,20,30]
sixth1 = [x for x in range(2, number) if number % x == 0]
sixth2 = []
for x in range(2, number):
    if number % x == 0:
        sixth2.append(x)

print("6.")
check(sixth, sixth1)
check(sixth, sixth2)
print()
print()


# 7.
box = [ [1,2,3],
        [4,5,6] ]

RTC1 = [ [row[x] for row in box ] for x in range(len(box[0])) ]
RTC2 = []

for x in range(len(box[0])):
    new_row = []
    for row in box:
        new_row.append(row[x])
    RTC2.append(new_row)

print("7.")
print("original", box)
print("ListComp", RTC1)
print("LOOP", RTC2)
