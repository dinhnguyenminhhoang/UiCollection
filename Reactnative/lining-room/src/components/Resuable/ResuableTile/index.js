import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ResuableText from "../ResuableText";
import { COLORS, SIZES } from "../../../constants/theme";
import WidthSpacer from "../WidthSpace";
import HeightSpace from "../HeightSpace";

export default function ResuableTile({ ListItems, type }) {
    return (
        <>
            {type === 2 ? (
                <FlatList
                    data={ListItems}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <WidthSpacer width={20} />}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(item) => (
                        <View style={styles.box}>
                            <Image
                                source={item.item.src}
                                resizeMode="contain"
                                style={{ width: 60, height: 60 }}
                            />
                            <HeightSpace height={10} />
                            <ResuableText
                                text={item.item.title}
                                size={SIZES.medium}
                                color={COLORS.lightGray}
                                fontWeight={600}
                            />
                        </View>
                    )}
                />
            ) : (
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={ListItems}
                    horizontal={true}
                    ItemSeparatorComponent={() => <WidthSpacer width={20} />}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(item) => (
                        <ResuableText
                            text={item.item.title}
                            size={SIZES.large - 2}
                            color={COLORS.white}
                            fontWeight={600}
                        />
                    )}
                />
            )}
        </>
    );
}

const styles = StyleSheet.create({
    box: {
        maxHeight: 120,
        width: 120,
        alignItems: "center",
        padding: 10,
        backgroundColor: COLORS.gray,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#0001",
    },
});
