n = int(raw_input())
vetor = map(int, raw_input().split(" "))

forca_jedi = 0
forca_sith = 0
m = n/2
for i in range(0,m) :
	forca_jedi += vetor[i]
for i in range(m,n) :
	forca_sith += vetor[i]
	
if forca_jedi > forca_sith :
	print("Jedi")
elif forca_jedi < forca_sith :
	print("Sith")
else :
	print("Empate")
