num = int(input("num: "))
char = int(input("char: "))

inteiro = num
resto = 0
cont = 0

while inteiro != 0:
    resto = inteiro%10
    inteiro = inteiro//10
    if resto == char:
        cont = cont + 1
    
print(cont)
