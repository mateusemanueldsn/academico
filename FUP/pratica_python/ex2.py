val1 = int(raw_input())
val2 = int(raw_input())
val3 = int(raw_input())
if val1 == val2 == val3:
    print '3'
elif val1 == val2 != val3:
    print '2'
elif val2 == val3 != val1:
    print '2'
elif val1 == val3 != val2:
    print '2'
elif val1 != val2 != val3:
    print '0'
