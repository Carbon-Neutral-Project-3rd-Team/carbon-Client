import React from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';

export default function RewardHistory({navigation}){
    const data = [
        {id: '1', title: '테스트 리워드 1', date: '2025-11-01'},
        {id: '2', title: '테스트 리워드 2', date: '2025-10-28'},
        {id: '3', title: '테스트 리워드 3', date: '2025-09-12'},
    ];

    const renderItem = ({item}) => (
        <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDate}>{item.date}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>테스트용 리워드 히스토리</Text>
            <Button title="뒤로" onPress={() => navigation?.goBack?.()} />
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header:{
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 12,
        textAlign: 'center',
    },
    list:{
        paddingTop: 12,
    },
    item:{
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#f6f6f6',
        marginBottom: 10,
    },
    itemTitle:{
        fontSize: 16,
        fontWeight: '500',
    },
    itemDate:{
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    }
});