def get_sum(a,b):
    return a+b


def get_product(a,b):
    return a*b

def greet(name):
    return f"Hello {name}"

def print_name():
    print(__name__)

print("mesage fromm sample")

if __name__ == "__main__":   #only run if this file is run directly
    print(get_sum(5,15))
    print(get_product(5,15))
    print(greet("John"))
    print_name()



