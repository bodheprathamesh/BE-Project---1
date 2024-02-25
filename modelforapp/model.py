import pickle

import xgboost as xgb

import pandas as pd

df = pd.read_csv("data2.csv")

df = df.drop(['Name', 'Peak Season', 'Before Season months', 'Months left for End of Season', 'Gender', 'TransactionCount', 'Unnamed: 0'], axis=1)
x = df.iloc[:,0:12]
y = df.iloc[:,16:17]

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(x, y, test_size = 0.3, random_state = 0)
dtrain = xgb.DMatrix(X_train, label=y_train)
dtest = xgb.DMatrix(X_test, label=y_test)

params = {
    'objective': 'reg:squarederror',
    'max_depth': 5,
    'learning_rate': 0.05,
    'eval_metric': 'rmse'
}

num_rounds = 100
model = xgb.train(params, dtrain, num_rounds)

with open('xgb_model.sav', 'wb') as f:
    pickle.dump(model, f)