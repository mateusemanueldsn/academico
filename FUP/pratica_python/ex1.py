val1 = int(raw_input())
val2 = int(raw_input())
oper = raw_input()

if oper == '+':
    print (val1+val2)
elif oper == '-':
    print (val1-val2)
elif oper == '*':
    print (val1*val2)
elif val2 == 0:
    print 'Invalida'
else:
    print (val1/val2)

