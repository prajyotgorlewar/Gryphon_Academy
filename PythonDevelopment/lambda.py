# Normal function
# def get_sum(a,b):
#     return a+b
# print(get_sum(1,2))


# Lambda Function
# s = lambda a,b : a+b
# print(s(20,25))

# nums = [[10,1000], [20,500], [30,3000], [5,800]]
# print(nums)
# nums.sort(key=lambda x: x[1]*x[0])
# print(nums)


# from random import randint
# nums = [randint(1,100) for i in range(20)]
# odd_even = [(lambda n:"even" if n%2==0 else "odd")(n) for n in nums]
# print(nums)
# print(odd_even)

# import sys
# #Generators and Iterators
# r = range(1,10111111111111111111111111111111111, 2)
# a = 10
# print(sys.getsizeof(r))


# def get_num():
#     yield(10)
#     yield(20)
#     yield(30)
#     yield(40)

# f = get_num()
# print(type(f))
# print(next(f))
# print(next(f))
# print(next(f))
# print(next(f))


#Infinite Generator
# def infi_series():
#     i=1
#     while True:
#         yield i
#         i += 1
# f = infi_series()
# print(next(f))      
# print(next(f))  
# print(next(f))  
# print(next(f))  
# print(next(f))  
# print(next(f))  
# print(next(f))  
# print(next(f))  
# print(next(f))  
# print(next(f))  
# print(next(f))  
# print(next(f))  
# print(next(f))  
# print(next(f))  
# print(next(f))  
# print(next(f))  
# print(next(f))  
# print(next(f))  


# def myRange(start,end,step):
#     while start<end:
#         yield start
#         start += step

# for n in myRange (0,2,0.25):
#     print(n)



#Iterator
#custom iterator (__init__, __iter__, __next__)  dunder methods
# class propert can be accessed by class but object property cannot be accessed by class

# class EmployeesId:
#     age = 21
#     def __init__(self, low, high):
#         self.low = low
#         self.high = high
#         self.current = low

#     def __iter__(self):
#         return self
    
#     def __next__(self):
#         temp = self.current
#         if self.current <= self.high:
#             self.current += 1
#             return temp
#         else:
#             raise StopIteration


# # emps = EmployeesId(10,20)
# # print(emps.age)
# # print(emps.age, emps.low, emps.high)
# #print(EmployeesId.low) # Attribute error

# for ids in EmployeesId(1001, 1005):
#     print(ids, end=" ")




# Create an iterator my_random(low, high, count) that generates count random float number between low and high.

# from random import uniform
# from random import randint
# from random import random
# class my_random:
#     def __init__(self, low, high, count):
#         self.low = low
#         self.high = high
#         self.count = count
#         self.current = 0

#     def __iter__(self):
#         return self

#     def __next__(self):
#         difference = self.high - self.low
#         if self.current < self.count:
#             self.current += 1
#             # return uniform(self.low, self.high)
#             # return randint(self.low, self.high - 1) + random()
#             return self.low + difference * random() # shifting+scaling
#         else:
#             raise StopIteration


# for r in my_random(50, 60, 10):
#     print(r, end=" ")



# hoomework
#    there is a string make a iterator to print n random purmutaion of the given string

from random import sample
class random_word:
    def __init__(self, word, n):
        self.word = word
        self.n = n
        self.current = 0

    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current < self.n:
            self.current += 1
            return "".join(sample(self.word, len(self.word)))
        else:
            raise StopIteration

for w in random_word("hello", n=10):
    print(w)