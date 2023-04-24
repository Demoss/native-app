import styled from "styled-components/native";

const DetailedArticleImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`

const DetailedArticleView = styled.View`
  padding: 20px;
`

const DetailedArticleDescription = styled.Text`
  font-size: 18px;
  line-height: 24px;
`

export const DetailedArticle = ({imageUrl, description}) => {
    return (
        <DetailedArticleView>
            <DetailedArticleImage
                source={{uri: imageUrl}}
            />
            <DetailedArticleDescription>{description}</DetailedArticleDescription>
        </DetailedArticleView>
    )
}