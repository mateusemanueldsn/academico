val1 = int(raw_input('Primeiro valor:'))
val2 = int(raw_input('Segundo valor:'))

if (val1 > val2) and  (val1 % val2 == 0):
    print 'O valor',val1,' eh divisivel por',val2
elif (val2 > val1) and  (val2 % val1 == 0):
    print 'O valor',val2,' eh divisivel por',val1
else:
    print "Nao eh divisivel"
    
