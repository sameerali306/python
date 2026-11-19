fruits=["apple", "banana", "cherry", "date", "elderberry"]
new_fruits=[x for x in fruits if "a" in x] 
print(new_fruits)  # Output: ['apple', 'banana', 'date']

name=["sameer ali","faria hussain","ali khan","sara ali"]
new_name=[x for x in name if "s" in x]
print(new_name)

new_name2=[x for x in name if "ali" in x and "hussain" in x]
print(new_name2)  # Output: ['faria hussain']