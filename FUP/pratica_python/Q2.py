l = map (int, raw_input(' ').split(" "))
x = int (raw_input(' '))
e = False
for i in l:
    if x == i:
        e = True
        if e:
            print 'encontrou'
        else:
            print 'nao encontrou'
