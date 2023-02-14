import { useRoute } from '@react-navigation/core';
import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from './ShowButtons.styles';

export function ShowButtons() {
  const route = useRoute();
  const maxButtons = useMemo(() => {
    return parseInt(route.params?.count, 10) ?? 0;
  }, [route.params?.count]);

  const minButtons = 0;

  const [buttonList, setButtonList] = useState([]);

  const getNewArray = (arrButton) => {
    const calculatingArray = arrButton.filter((item) => item.type === 'white');
    if (calculatingArray.length > 0) {
      const randomIndex = Math.floor(
        Math.random() * (calculatingArray.length - 1 - minButtons + 1),
      );
      if (randomIndex > -1) {
        const arrIndex = arrButton.findIndex(
          (item) => item.index === calculatingArray[randomIndex].index,
        );
        arrButton[arrIndex] = { ...arrButton[arrIndex], type: 'blue' };
      }
    }
    return arrButton;
  };

  const changeButtons = (index) => {
    const arrButton = [...buttonList];
    arrButton[index] = { ...arrButton[index], type: 'red' };

    const newArrButton = getNewArray(arrButton);

    setButtonList([...newArrButton]);
  };

  useEffect(() => {
    const arr = [...Array(maxButtons).keys()].map((item, index) => {
      return { index: item + 1, type: 'white' };
    });

    getNewArray(arr);

    setButtonList(arr);
  }, [maxButtons]);

  return (
    <View style={styles.container}>
      <FlatList
        data={buttonList}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            style={{ margin: 10, backgroundColor: item.type }}
            disabled={item.type !== 'blue'}
            onPress={() => changeButtons(index)}>
            <Text style={{ margin: 2 }}>{`${item.index}`}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
