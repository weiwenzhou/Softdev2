import random

def make_HTML_heading(f):
    def inner():
        return "<h1>" + f() + "</h1"
    return inner

# def greet():
#     greetings = ['Hello', 'Welcome', 'AYO!', 'Hola', 'Bonjour', 'Word Up']
#     return random.choice(greetings)

# greet_heading = make_HTML_heading(greet)

# print(greet_heading())
# print(greet_heading())

@make_HTML_heading
def greet():
    greetings = ['Hello', 'Welcome', 'AYO!', 'Hola', 'Bonjour', 'Word Up']
    return random.choice(greetings)

print(greet())
print(greet())

def fib():
    num = [0,1]
    def inner(n):
        nonlocal num
        if n < len(num):
            return num[n]
        else:
            num.append(num[-2]+num[-1])
            inner(n)
    return inner

# fib_gen = fib()
# print(fib_gen(10))

def memorization():
    memo = {}
    def inner(n):
        if (n not in memo.keys()):
            memo[n] = fib(n)
        return memo[n]
    return inner

def fib(n):
    if n < 2:
        return n
    else:
        return fib(n-1) + fib(n-2)

fib_gen = memorization()
print(fib_gen(40))
