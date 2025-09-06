p = float (raw_input())
a = float (raw_input())
imc = (p/a**2)

if imc <= 20:
     print 'magro'
elif imc > 20 and < 25:
     print 'normal'
elif imc >= 25:
     print 'gordo'
