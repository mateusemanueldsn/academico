carac = raw_input(' ')
nova = []
for c in carac:
    if ord(c) > 96 or ord(c) < 123:
        nova = c.upper()
print nova
        
