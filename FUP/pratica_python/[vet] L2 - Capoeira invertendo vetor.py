q = int (raw_input())
l = raw_input(' ').split(" ")
ind1 = 0
ind2 = len (l) - 1

if q%2 == 0:
    while ind1 <= ind2:
        aux = l[ind1]
        l[ind1] = l[ind2]
        l[ind2] = aux
        ind1 = ind1 + 1
        ind2 = ind2 - 1
else:
    while ind1!=ind2:
        aux = l[ind1]
        l[ind1] = l[ind2]
        l[ind2] = aux
        ind1 = ind1 + 1
        ind2 = ind2 - 1

print (l)