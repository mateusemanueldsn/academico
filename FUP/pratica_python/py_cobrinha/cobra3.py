import pygame
from pygame.locals import *
from random import randrange
pygame.init()
#cores
branco=(255,255,255)
preto=(0,0,0)
verde=(0,100,0)
vermelho = (255,0,0)
verde = (0,255,0)
azul = (0,0,255)


#dimensoes da tela, tamanho da cobra e outras variaveis globais do código
largura = 800
altura = 600
tamanho = 10
#definir o fps
relogio = pygame.time.Clock()

#funcao que desenha tela e que nomeia
tela = pygame.display.set_mode((largura,altura))
pygame.display.set_caption("Jogo da Pythonzinha 3.0")
font = pygame.font.SysFont(None, 25)

#configuracao das imagens e do audio
imgmaca = pygame.image.load('maca.png')
imgcabsnake = pygame.image.load('cabsnake.png')
pygame.mixer.music.load('audio2.ogg')
pygame.mixer.music.play(3)

def gameover(msg,cor):
    font = pygame.font.SysFont(None, 25)
    texto1 = font.render(msg, True,cor)
    tela.blit(texto1, [360, altura/2])

def placar(msg,cor):
    font = pygame.font.SysFont(None, 25)
    texto2 = font.render(msg, True,cor)
    tela.blit(texto2, [10, 570])

#funcao cobra, que recebe uma lista CobraXY e desenha ela na tela
def cobra(Cobra):
    for i in Cobra:
        pygame.draw.rect(tela, branco, [i[0], i[1], tamanho, tamanho])

#funcao maca que recebe as coordenadas da maca e desenha ela na tela
        
#def maca(pos_x, pos_y):
    #pygame.draw.rect(tela,vermelho,[pos_x, pos_y, tamanho, tamanho])
    
#funcao do jogo, dando os valores das coordenadas da cobra e da maca
def jogo():
    sair = True
    gameover2 = False
    pos_x = randrange(0,(largura-tamanho),10)
    pos_y = randrange(0,(largura-tamanho),10)
    maca_x = randrange(0,(largura-tamanho),10)
    maca_y = randrange(0,(altura-tamanho),10)
    mov_x = -10
    mov_y = 0
    pontuador = 0

#lista cobra
    Cobra = [ ]

    CobraTam = 2

#laco infinito
    while sair:
#GAMEOVER E TRY AGAIN
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                sair = False
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT and mov_x != tamanho:
                    mov_y = 0
                    mov_x = -tamanho
                if event.key == pygame.K_RIGHT and mov_x != -tamanho:
                    mov_y = 0
                    mov_x = tamanho
                if event.key == pygame.K_UP and mov_y != tamanho:
                    mov_x = 0
                    mov_y = -tamanho
                if event.key == pygame.K_DOWN and mov_y != -tamanho:
                    mov_x = 0
                    mov_y = tamanho
        while gameover2:
            tela.fill(preto)
            #para a musica se a cobrinha morrer
            pygame.mixer.music.stop()
            gameover("GAME OVER ", branco)
            pygame.display.update()
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    sair = False
                    gameover2 = False
                if event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_c:
                        sair = True
                        gameover2 = False
                        pos_x = randrange(0,(largura-tamanho),10)
                        pos_y = randrange(0,(largura-tamanho),10)
                        maca_x = randrange(0,(largura-tamanho),10)
                        maca_y = randrange(0,(altura-tamanho),10)
                        mov_x = -10
                        mov_y = 0
                        Cobra = []
                        CobraTam = 1
                        pontuador = 0
                    if event.type == pygame.K_e:
                        sair = False
                        gameover2 = False
                        break
        if sair:
            tela.fill(preto)
            pos_x += mov_x
            pos_y += mov_y

    #cobra come maca
            if pos_x == maca_x and pos_y == maca_y:
                maca_x = randrange(0,largura-tamanho, 10)
                maca_y = randrange(0,altura-tamanho, 10)
                CobraTam += 1
                pontuador += 1

    #faz que a cobra atravesse a parede        
            if pos_x > largura:
                pos_x = 0
            if pos_x < 0:
                pos_x = largura - tamanho
            if pos_y > altura:
                pos_y = 0
            if pos_y < 0:
                pos_y = altura - tamanho

            CobraCabeca = []
                
    #coloca os valores de x e y na lista CobraCabeca
            CobraCabeca.append(pos_x)
            CobraCabeca.append(pos_y)

    #coloca a lista CobraCabeca na lista Cobra
            Cobra.append(CobraCabeca)
            if len(Cobra) > CobraTam:
    #deleta o novo elemento na lista Cobra
                del Cobra[0]

            if any(CorpoCobra == CobraCabeca for CorpoCobra in Cobra[:-1]):
                gameover2 = True
                
            
            placar('Pontos:'+str(pontuador),branco)
            #chamando funcao cobra
            cobra(Cobra)
            #maca(maca_x,maca_y)
            tela.blit(imgmaca,(maca_x-7,maca_y-7))
            tela.blit(imgcabsnake,(pos_x,pos_y))
            pygame.display.update()
            relogio.tick(15)

jogo()
pygame.quit()

