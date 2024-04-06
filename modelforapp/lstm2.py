if __name__ == "__main__":
    import numpy as np
    from tensorflow.keras.models import Sequential
    from tensorflow.keras.layers import LSTM
    from tensorflow.keras.layers import Dense
    from tensorflow.keras.layers import Flatten
    import h5py
    from ..backend.orcapp.views import x,y

    import pandas as pd
    # df = pd.read_csv("../data2.csv")
    hdf5_file_path = 'runtime_data.h5'
    hdf5_file = h5py.File(hdf5_file_path, 'w')


    hdf5_file.create_dataset('X_train', data=x)
    hdf5_file.create_dataset('y_train', data=y)

    X_train_from_file = hdf5_file['X_train'][:]
    y_train_from_file = hdf5_file['y_train'][:]


    model = Sequential()
    model.add(LSTM(50,activation='relu',return_sequences=True, input_shape = (6,1)))
    model.add(LSTM(50,activation='relu'))
    model.add(Dense(1))
    model.compile(optimizer = 'adam',loss = 'mse')
    model.fit(X_train_from_file,y_train_from_file,epochs = 50,verbose = 0)

    model.save('lstm_model_2.h5')
