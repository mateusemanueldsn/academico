l = map(int, raw_input(' ').split(" "))
maxi = l[0]
mini = l[0]

for i in l:
    if i > maxi:
        maxi = i
    if i < mini:
        mini = i
print(mini,maxi)
