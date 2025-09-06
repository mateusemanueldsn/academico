l = map(int, raw_input(' ').split(" "))
maior = l[0]
menor = l[1]
for i in l:
    if i > maior:
        maior = i
    if i < menor:
        menor = i
print (maior+menor)
