def linearSearch(array, target):
    found = False
    for i in array:
        if(i==target):
            print("Element found")
            found=True
            break
    if not found:
        print("Element not found")
   
arr=[1,4,7,4,9,10,25,22,100]
linearSearch(arr, 101)
