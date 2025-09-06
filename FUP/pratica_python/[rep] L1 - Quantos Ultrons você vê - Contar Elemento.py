linha1 = map(int, raw_input().split(" "))
linha2 = map(int, raw_input().split(" "))

x = linha1[0]
n = linha1[1]

cont = 0
for i in linha2 :
	if i == x :
		cont = cont + 1
print(cont)
