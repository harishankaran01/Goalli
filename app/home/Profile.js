import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useMemo, useRef } from 'react';
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet';
import { hp, wp } from '../../theme/common';
import { AuthContext } from '../Context/AuthContext';
import { theme } from '../../theme/color';

export default function Profile({ profileRef, handleProfileClose }) {
    const snapPoints = useMemo(() => ['83%'], []);
    const {userName}=useContext(AuthContext);
    return (
        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={profileRef}
                index={0}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                onDismiss={handleProfileClose}
            >
                <BottomSheetView style={styles.profileContainer}>
                    <Text>Hello</Text>
                </BottomSheetView>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        width: wp(100),
        height: hp(100),
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
