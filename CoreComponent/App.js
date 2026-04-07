import { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

export default function App() {
  const [IsModalVisiable, setIsModalVisible] = useState(false);
  
  return (
    <View style={styles.container}>
      {/* Button */}
        <Button
          title='Press'
          onPress={()=> setIsModalVisible(true)}
          color='midnightblue'
      />
      
      <Modal
        visible={IsModalVisiable}
        onRequestClose={()=>setIsModalVisible(false)}
        animationType='slide'
        presentationStyle='formSheet'
      >
        <View style={{flex: 1, backgroundColor: "lightblue", padding: 60}}>
          <Text>This is a modal</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 60,
  },
});
