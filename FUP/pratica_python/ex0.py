linha = raw_input()
opcoes = linhasplit("")
a = int(opcoes[0])
b = int(opcoes[1])
if b !=0:
    print("%d %d %d %2.f %d" %(a+b, a-b, a*b, float (a)/b, a%b))
else:
    print("%d %d %d" %(a+b,a-b,a*b))
    print("impossivel dividir por zero")
