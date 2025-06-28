# def fibonacci(n):
#     if n==1:
#         print("0 1 1")
#     if n >= 2:
#         print("0")
#         print("1")
#         a, b = 0, 1
#         for i in range(2, n):
#                 c = a + b
#                 if c <= n:
#                   print(c)
#                   a, b = b, c        
# fibonacci(2)

#using recursion limit
# def fibonacci(limit, a=0, b=1):
#     if a <=limit:
#         print(a)
#         fibonacci(limit, b, a + b)
# fibonacci(100)        

#using recursion normal
def fibonacci(n, a=0, b=1):
    if n > 0:
        print(a)
        fibonacci(n - 1, b, a + b)
fibonacci(5)        

