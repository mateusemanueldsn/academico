par = 0
impar = 0

while True:
    palavra = raw_input()
    if palavra == 'parar':
        break
    elif float(palavra) % 2 == 0:
        par = par + float(palavra)
    elif float(palavra) % 2 == 1:
        impar = impar + float(palavra)
result = par/impar   

print float(result)
