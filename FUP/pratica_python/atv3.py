n1 = int (raw_input())
n2 = int(raw_input())
n3 = int(raw_input())

aux = 0

if n1 > n2:
     aux = n1
     n1 = n2
     n2 = aux
if n1 > n3:
     aux = n1
     n1 = n3
     n3 = aux
if n2 > n3:
     aux = n2
     n2 = n3
     n3 = aux

     print n1,n2,n3
