def calculateExpression(expression):
    numberStack = []
    operatorStack = []
    precedence = {'/':1, '*':1, '+':0, '-':0}

    i=0
    while i < len(expression):
        if expression[i].isdigit():
            val = 0
            while i<len(expression) and expression[i].isdigit():
                val = val * 10 + int(expression[i])
                i += 1
            numberStack.append(val)    
        else:
            while len(operatorStack) > 0 and precedence[operatorStack[-1]] >= precedence[expression[i]]:
                right = numberStack.pop()
                left = numberStack.pop()
                op = operatorStack.pop()
                if op == '+':
                    numberStack.append(left + right)
                elif op == '-':
                    numberStack.append(left - right)
                elif op == '*':
                    numberStack.append(left * right)
                elif op == '/':
                    numberStack.append(left // right)
            operatorStack.append(expression[i])
            i += 1
        
    return numberStack[0]

inputString = "3+5*2-8/2"
print(calculateExpression(inputString))
