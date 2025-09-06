n = int(raw_input())
antigo = n
novo = 0
while n != 0 :
	r = n%10
	n = n/10
	novo = novo*10+r

if antigo == novo :
	print("1")
else :
	print("0")
