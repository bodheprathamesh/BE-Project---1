if __name__ == "__main__":
    import numpy as np
    from tensorflow.keras.models import Sequential
    from tensorflow.keras.layers import LSTM
    from tensorflow.keras.layers import Dense
    from tensorflow.keras.layers import Flatten
    import h5py
    import sys
    import numpy as np
    print("in other file")

    x = np.load('xtrain.npy')
    y = np.load('ytrain.npy')


    print(x)
    print(y)
    


    import pandas as pd
    # df = pd.read_csv("../data2.csv")
    # hdf5_file_path = 'runtime_data.h5'
    # hdf5_file = h5py.File(hdf5_file_path, 'w')


    # hdf5_file.create_dataset('X_train', data=x)
    # hdf5_file.create_dataset('y_train', data=y)

    # X_train_from_file = hdf5_file['X_train'][:]
    # y_train_from_file = hdf5_file['y_train'][:]


    x_train = x.reshape((x.shape[0],x.shape[1],1))

    model = Sequential()
    model.add(LSTM(50,activation='relu',return_sequences=True, input_shape = (11,1)))
    model.add(LSTM(50,activation='relu'))
    model.add(Dense(1))
    model.compile(optimizer = 'adam',loss = 'mse')
    model.fit(x_train,y,epochs = 200,verbose = 0)

    model.save('lstm_model_2.h5')
