l = map(int, raw_input(' ').split(" "))
sp = 0
si = 0
for i in l:
    if i % 2 == 0:
        sp += i
    else:
        si += i
print (sp -si)
