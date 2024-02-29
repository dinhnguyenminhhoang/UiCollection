import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import WidthSpacer from "../Resuable/WidthSpace";

export default function HeaderCs({ ListItemRight, ListItemLeft }) {
    return (
        <View style={styles.container}>
            {ListItemLeft ? (
                <FlatList
                    data={ListItemLeft}
                    horizontal={true}
                    renderItem={(item) => {
                        return (
                            <>
                                {item.item.icon}
                                <WidthSpacer width={8} />
                            </>
                        );
                    }}
                />
            ) : null}

            <View>
                {ListItemRight ? (
                    <FlatList
                        data={ListItemRight}
                        horizontal={true}
                        renderItem={(item) => {
                            return (
                                <>
                                    {item.item.icon}
                                    <WidthSpacer width={8} />
                                </>
                            );
                        }}
                    />
                ) : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
