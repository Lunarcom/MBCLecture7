class A(가위,바위,보)
def '가위'>'보'
    '바위'>'가위'
    '보'>'바위'
if insert '가위' on '보'
print '가위' wins"
elif insert '바위' on '가위'
print '바위 wins'
else insert '보' on '바위'
print '보 wins'
if same'' it is Draw
print Result : Draw ("가위on가위, 바위on바위, 보on보")


g={가위, 바위, 보보}


man1 = input()
man2 = input()

mjp = {'가의', '바위', '보'}
win = -1

if man1==mjp[0]:
    if man2==mjp[1]:
        win = 2
    elif man2==mjp[2]:
        win = 1
    else:
        win = 0
elif man==mjp[1]:
    if man2==mjp[0]:
        win = 1
    elif man2==mjp[2]:
        win = 2
    else:
        win = 0

if win!=0:
    print(f"result: man{win} win"
    else:
        print(f"Result: Draw"))



