from central_file import df
from transactions import transactions_count
import pandas as pd

rate = []


def IR():
    for index,row in df.iterrows():

        n_profits = (row["AVG Sales"] - 20000) / (200000 - 20000) * 50

        n_age = ((row["Age"] - 15) / (80 - 15)) * 10

        n_loan_amount = 0
        if row[21] != 0:
            n_loan_amount = ((row["Loan Amount"] - row["AVG Sales"]) / row["AVG Sales"]) * 30

        n_duration = (row["Duration"] / 24) * 10

        op = ((n_age + n_loan_amount + n_duration) / n_profits) * 15

        rate.append(op)


temp = []
def avg_order_cost():
    for index, row in df.iterrows():
        op = row["AVG Sales"] / row['TransactionCount']

        # print(f'{row["AVG Sales"]} + {row["TransactionCount"]}')
        temp.append(op)

    
avg_order_cost()
# IR()


df.insert(21,"avg order cost",temp)
# df['rates'] = rate

print(len(temp))


df.to_csv('C:/Users/pbodh/OneDrive/Desktop/MSME/data2.csv')
