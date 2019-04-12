# Wei Wen Zhou
# SoftDev2 pd8
# K<16> -- Do You Even List?
# 2019-04-11

UC_LETTERS = 'QWERTYUIOPASDFGHJKLZXCVBNM'
LC_LETTERS = 'qwertyuiopasdfghjklzxcvbnm'
NUMBERS = '1234567890'
SPECIALS = ".?!&#,;:-_*"

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
    return len([x for x in password if x in UC_LETTERS]) > 0  and len([x for x in password if x in LC_LETTERS]) > 0 and len([x for x in password if x in NUMBERS]) > 0

# Return a number between 0 and scale
def strength(password, scale=1):
    if len(password) == 0:
        return 0

    E = len(password)/4
    U = len([x for x in password if x in UC_LETTERS])
    L = len([x for x in password if x in LC_LETTERS])
    N = len([x for x in password if x in NUMBERS])
    S = len([x for x in password if x in SPECIALS])

    val = [ (x - E)**2/E for x in [U, L, N, S] ]
    total = sum(val)

    if total:
        return scale/total
    return scale

if 0:
    check( sum ([1,1,1,1]), 4)
    check( sum ([]), 0)
    check( sum ([x for x in range(10)]), 45)

if 0:
    check( checkRequirements(''), False)
    check( checkRequirements('a'), False)
    check( checkRequirements('a124'), False)
    check( checkRequirements('aA124'), True)
    check( checkRequirements('aA!'), False)
    check( checkRequirements('aA1!'), True)

p = "password1"
print(strength(p, 10))
