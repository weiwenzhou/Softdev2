# Team XZ - Wei Wen Zhou, Sophia Xia
# Softdev pd8

# VARIABLES===========================================================
TEST = [1,2,3,4,5]
A = [1,2,3]
B = [2,3,4]
C = [5,6,7]
print("A", A)
print("B", B)
print("C", C)

# FUNCTIONS============================================================
# Compare f with val
def check(f, val):
    print(f, val, f == val)

# "1. Union of sets A and B"
def union(A, B):
    return A + [x for x in B if x not in A]

# "2. Intersection of sets A and B"
def intersection(A, B):
    return [x for x in A if x in B]

# "3. Set Difference of U and A denoted U\A"
def setDiff(U, A):
    return [x for x in U if x not in A]

# "4. Symmetric difference of sets A and B"
#set diff of union and intersection
def symmDiff(A, B):
    #return setDiff(A, B)+setDiff(B,A)
    return setDiff(union(A, B), intersection(A, B))

# "5. Cartesian product of A and B, A x B. All possible order pairs"
def cartProduct(A, B):
    return [(a, b) for a in A for b in B]

# "6. COOL STUF"
def coolStuf():
    return "coolStuf"

# TESTING==============================================================
if 1 in TEST:
    print("TESTING UNION")
    check(union(A, B), [1,2,3,4])
    check(union(A, C), [1,2,3,5,6,7])

if 2 in TEST:
    print("TESTING INTERSECTION")
    check(intersection(A,B), [2,3])
    check(intersection(A,C), [])

if 3 in TEST:
    print("TESTING SETDIFF")
    check(setDiff(A, B), [1])
    check(setDiff(B, A), [4])

if 4 in TEST:
    print("TESTING SYMMDIFF")
    check(symmDiff(A,B), [1,4])

if 5 in TEST:
    print("TESTING CARTPRODUCT")
    check(cartProduct(A, B), [(1,2), (1,3), (1,4), (2,2), (2,3), (2,4), (3,2), (3,3), (3,4)])
