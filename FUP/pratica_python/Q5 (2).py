n = int(raw_input(' '))
cont = 0

for i in range( n+1):
    if  i % 2 == 0:
        cont = cont+1
if cont == 2:
        print 'primo'
else:
        print 'nao primo' 
