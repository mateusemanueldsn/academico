q = int(raw_input(''))
n = map(int, raw_input(' ').split(" "))
par = [ ]
impar = [ ]
for i in n:
    if q != len(n):
        break
    if i % 2 == 0:
        par.append(i)
    if i % 2 != 0:
        impar.append(i)
        
print impar
print par 
