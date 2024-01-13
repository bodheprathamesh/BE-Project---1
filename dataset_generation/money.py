import random
from montly_profit import * 
money_foryear_perperson = []

for person in range (0,1000):
    indivisual_month_income = []
    indivisual_month_income = genrate()
    money_foryear_perperson.append(indivisual_month_income)

money_foryear_perperson_transpose = list(map(list, zip(*money_foryear_perperson)))
# print(money_foryear_perperson[:1])