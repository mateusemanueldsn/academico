cod1 = int(input())
num1 = int(input())
preco_pec1 = float(input())

cod2 = int(input())
num2 = int(input())
preco2 = float(input())

pagar = ((num1 * preco1) + (num2 * preco2))
print ('VALOR A PAGAR: R$ {:.2f}' .format(pagar))
