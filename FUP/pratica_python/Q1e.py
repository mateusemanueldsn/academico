l = map(int, raw_input(' ').split(" "))
m = l[0]
sm = l[1]
for i in range (2, len(l)):
    if l[i] > m:
        sm = m
        m = l[i]
    elif l[i] > sm:
        sm = i
print (m, sm)
