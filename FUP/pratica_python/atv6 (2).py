peso = float(raw_input('Peso:'))
altura = int (raw_input('Altura:'))
imc = (peso/altura**2)

if imc <= 20:
    print 'magro'
elif imc > 20 and imc < 25:
    print 'normal'
elif imc > 25:
    print 'gordo'
