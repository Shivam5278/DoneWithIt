import React from 'react';
import * as Progress from 'react-native-progress';

import { View, StyleSheet, Modal } from 'react-native';
import Text from '../components/Text';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';

function UploadScreen({ onDone, progress= 0, visible= false}) {
    return (
        <Modal visible={visible}>
        <View style={styles.container}>
            { progress<1? (
                <Progress.Bar progress={progress} color={colors.primary} width={200} />
            ):(
                <LottieView 
                autoPlay
                loop={false}
                onAnimationFinish={onDone}
                style={styles.animation}
                source={require('../assets/animations/done.json')}/>
                
            )}
            
        </View>

        </Modal>
    );
}

const styles = StyleSheet.create({
    animation: {
        width: 150,
    },

    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        
    },

})

export default UploadScreen;