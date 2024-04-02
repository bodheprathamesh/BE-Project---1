import pandas as pd
import numpy as np
import tensorflow as tf

df = pd.read_csv("data2.csv")
df = df.drop(['Name','Peak Season','Before Season months', 'Months left for End of Season','Gender'], axis=1)
df = df.drop(['TransactionCount','Unnamed: 0'], axis=1)

x = df.iloc[:, 0:12]
y = df.iloc[:, 16:17]

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.3, random_state=0)

from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, LSTM

model = Sequential()

model.add(LSTM(units=50, activation='relu', input_shape=(12, 1)))
model.add(Dense(50, activation='relu'))
model.add(Dense(1))

model.compile(optimizer='adam', loss='mean_squared_error', metrics=['mean_squared_error'])

model.fit(X_train.values.reshape(-1, 12, 1), y_train, batch_size=64, epochs=64, validation_split=0.2, verbose=2)

# Save the model
model.save('lstm_model_2.h5')

# Load the model
# loaded_model = tf.keras.models.load_model('lstm_model_1')