l = map(int, raw_input(' ').split(" "))
primo = [ ]
for i in l:
    if i % 2 != 0:
        primo = i
print primo
