import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";

const InformationBox = () => {
    return (
        <View style={styles.container}>
            <Text>fdsfds</Text>
        </View>
    );
};

export default InformationBox;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: "100%",
        flex: 1,
        borderRadius: 12,
        backgroundColor: COLORS.gray,
    },
});
