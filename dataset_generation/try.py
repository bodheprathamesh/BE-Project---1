from names import distinct_names_list
from money import money_foryear_perperson, money_foryear_perperson_transpose
from age import age
from gender import gender
from transactions import transactions_count
from credit import credit_score
import pandas as pd

final_dataset = tuple(zip(distinct_names_list,money_foryear_perperson_transpose[0],money_foryear_perperson_transpose[1],money_foryear_perperson_transpose[2],money_foryear_perperson_transpose[3],money_foryear_perperson_transpose[4],money_foryear_perperson_transpose[5],money_foryear_perperson_transpose[6],money_foryear_perperson_transpose[7],money_foryear_perperson_transpose[8],money_foryear_perperson_transpose[9],money_foryear_perperson_transpose[10],money_foryear_perperson_transpose[11],age,gender,transactions_count,credit_score,money_foryear_perperson_transpose[12],money_foryear_perperson_transpose[13],money_foryear_perperson_transpose[14],money_foryear_perperson_transpose[15],money_foryear_perperson_transpose[16]))

df = pd.DataFrame(final_dataset)

df.columns =['Name', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Age', 'Gender', 'TransactionCount', ' CreditScore', 'Loan Amount', 'Duration', 'Peak Season', 'Before Season months', 'Months left for End of Season']

df.to_csv('C:/Users/pbodh/OneDrive/Desktop/MSME/data1.csv')
