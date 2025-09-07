n1 = float (raw_input('nota 1'))
n2 = float (raw_input('nota 2'))
n3 = float (raw_input('nota 3'))

p1 = int (raw_input('peso 1:'))
p2 = int (raw_input('peso 2:'))
p3 = int (raw_input('peso 3:'))

m = ((n1*p1)+(n2*p2)+(n3*p3)) / (p1+p2+p3)

if m >= 7:
     print 'APROVADO'
else:
     print 'REPROVADO'
     
