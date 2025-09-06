nota = float(raw_input('Nota:'))
fracao_nota = (nota - int(nota))
if fracao_nota <= 0.5:
    print int (nota)
elif fracao_nota > 0.5:
    print int (nota+1)
