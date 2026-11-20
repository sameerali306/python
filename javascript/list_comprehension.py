fruits=["apple", "banana", "cherry", "date", "elderberry"]
new_fruits=[x for x in fruits if "a" in x] 
print(new_fruits)  # Output: ['apple', 'banana', 'date']

name=["sameer ali","faria hussain","ali khan","sara ali"]
new_name=[x for x in name if "s" in x]
print(new_name)

new_name2=[x for x in name if "ali" in x ]
print(new_name2)  # Output: ['sameer ali', 'ali khan', 'sara ali']

newlist = [x for x in range(10) if x < 5]
print(newlist)
allitem = ['hello' for x in fruits]
print(allitem  )

newlists = [x if x != "banana" else "orange" for x in fruits]
print(newlists)
