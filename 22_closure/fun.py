def inc(x):
    return x + 1

f = inc

print(f)

def adder(a,b):
    return a+b

def caller(c):
    print(c(2,4))
    print(c(3,5))

caller(adder)

def outer(x):
    def contains(l):
        return x in l
    return contains

contains_15 = outer(15)

print(contains_15([1,2,3,4,5]))
print(contains_15([13,14,15,16,17]))
print(contains_15(range(1,20)))

del outer
# print(outer(42))
print(contains_15(range(14,20)))
print()
print()

def repeat(word):
    def makeMore(n):
        return word * n
    return makeMore

r1 = repeat("hello")
r2 = repeat("goodbye")

print(r1(2))
print(r2(2))
print(repeat("cool")(3))

def outer():
    x = "foo"
    def inner():
        nonlocal x
        x = "bar"
    inner()
    return x

print(outer())

def make_counter():
    x = 0
    def inc():
        nonlocal x
        x = x + 1
        return x
    return inc

ctr1 = make_counter()
print(ctr1()) # 1
print(ctr1()) # 2

ctr2 = make_counter()
print(ctr2()) # 1
print(ctr1()) # 3
print(ctr2()) # 2
