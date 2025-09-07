n = int(raw_input( ))
L = map(int, raw_input(' ').split(" "))

for i in range (0, n-1):
    k = i
    for j in range( i + 1, n):
        if L[j] < L[k]:
            k = j
    aux = L[i]
    L[i] = L[k]
    L[k] = aux

print (L)
