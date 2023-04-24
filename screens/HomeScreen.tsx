import { StatusBar } from 'expo-status-bar';
import {View, Alert, FlatList, RefreshControl, TouchableOpacity} from 'react-native';
import styled from "styled-components/native";
import axios from "axios";
import {Article} from "../components/Article";
import {useEffect, useState} from "react";
import {Loading} from "../helpers/loading";

export const HomeScreen = ( {navigation} ) => {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])

    const fetch = () =>  {
        setLoading(true)
        axios
            .get("https://6442754a33997d3ef910ac3f.mockapi.io/users")
            .then( ({ data }) => {
                setItems(data)
            })
            .catch((err) => {
                console.log(err)
                Alert.alert("error", "cannot find posts")
            })
            .finally(()=>{
                setLoading(false)
            })
    };
    useEffect(fetch,[])

    return (
        <View>
            <FlatList
                refreshControl={<RefreshControl refreshing={loading} onRefresh={fetch}/>}
                data={items}
                renderItem={({item}) =>
                    <TouchableOpacity onPress={() => {navigation.navigate('Detailed', { id: item.id, name: item.name})}}>
                        <Article title={item.name} createdAt={item.createdAt} imageUrl={item.url}/>
                    </TouchableOpacity>
                }
            />
        </View>
    );
}


