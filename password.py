# Wei Wen Zhou
# SoftDev2 pd8
# K< > --
# 2019-04-11

UC_LETTERS = 'QWERTYUIOPASDFGHJKLZXCVBNM'
LC_LETTERS = 'qwertyuiopasdfghjklzxcvbnm'
NUMBERS = '1234567890'
SPECIALS = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

# Function checker
def check(func, val):
    if func == val:
        print ( func, val, "GOOD")
    else:
        print ( func, val)

# Return the sum of a list
def sum(list):
    s = 0
    for i in range(len(list)):
        s += list[i]
    return s

# Return true if password contains UC/LC letters, numbers, and symbols else false
def checkRequirements(password):
    if len(password) < 5:
        return False
    else:
        return sum([1 if x in UC_LETTERS else 0 for x in password])
# Return a number between 0 and scale
def strength(password, scale=1):
    pass

if True:
    check( sum ([1,1,1,1]), 4)
    check( sum ([]), 0)
    check( sum ([x for x in range(10)]), 45)

if True:
    check( checkRequirements(''), False)
    check( checkRequirements('a'), False)
    check( checkRequirements('a124'), False)
    check( checkRequirements('aA1!'), True)
