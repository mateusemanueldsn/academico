j1 = raw_input('Jogador 1:')
j2 = raw_input('Jogador 2:')

if (j1 == j2):
    print 'Empate'
elif (j1 == 'pedra' and j2 == 'tesoura') or (j1 == 'pedra' and j2 == 'lagarto'):
      print 'Jogador 1 é o vencedor'
elif (j2 == 'pedra' and j1 == 'tesoura') or (j2 == 'pedra' and j1 == 'lagarto'):
      print 'Jogador 2 é o vencedor'
elif (j1 == 'papel' and j2 == 'spock') or (j1 == 'papel' and j2 == 'pedra'):
      print 'Jogador 1 é o vencedor'
elif (j2 == 'papel' and j1 == 'spock') or (j2 == 'papel' and j1 == 'pedra'):
      print 'Jogador 2 é o vencedor'
elif (j1 == 'tesoura' and j2 == 'papel') or (j1 == 'tesoura' and j2 == 'lagarto'):
      print 'Jogador 1 é o vencedor'
elif (j2 == 'tesoura' and j1 == 'papel') or (j2 == 'tesoura' and j1 == 'lagarto'):
      print 'Jogador 2 é o vencedor'
elif (j1 == 'lagarto' and j2 == 'spock') or (j1 == 'lagarto' and j2 == 'papel'):
      print 'Jogador 1 é o vencedor'
elif (j2 == 'lagarto' and j1 == 'spock') or (j2 == 'lagarto' and j1 == 'papel'):
      print 'Jogador 2 é o vencedor'
elif (j1 == 'spock' and j2 == 'tesoura') or (j1 == 'spock' and j2 == 'pedra'):
      print 'Jogador 1 é o vencedor'
elif (j2 == 'spock' and j1 == 'tesoura') or (j2 == 'spock' and j1 == 'pedra'):
      print 'Jogador 2 é o vencedor'
else:
     print 'Informacao invalida'
