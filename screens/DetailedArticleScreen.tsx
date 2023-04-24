import {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import {Alert, View} from "react-native";
import {Loading} from "../helpers/loading";
import {DetailedArticle} from "../components/DetailedArticle";
const DetailedArticleScreen = ({ route, navigation }) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({
        url: undefined,
        description: ""

    })
    const {id, name} = route.params
    useEffect(() => {
        navigation.setOptions({
            title: name,
        })
        setLoading(true)
        axios
            .get("https://6442754a33997d3ef910ac3f.mockapi.io/users/"+id)
            .then( ({ data }) => {
                setData(data)
            })
            .catch((err) => {
                console.log(err)
                Alert.alert("error", "cannot find article")
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [])
    if(loading){
        return (
            <View>
                <Loading/>
            </View>
        )
    }
    return (
        <DetailedArticle imageUrl={data.url} description={data.description}/>
    );
};

export default DetailedArticleScreen;
