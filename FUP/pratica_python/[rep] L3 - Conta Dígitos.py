

digito = int(raw_input())
tel = int(raw_input())
cont = 0
while tel != 0 :
	r = tel%10
	if r == digito :
		cont += 1
	tel = tel/10
print(cont)
