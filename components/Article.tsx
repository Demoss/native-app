import styled from "styled-components/native";

const ArticleView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-color: rgba(0,0,0,0.1);
  border-bottom-width: 1px;
  border-bottom-style: solid;
`

const ArticleImage = styled.Image`
  width: 60px;
  height: 60px;
  margin-right: 12px;
`

const ArticleDetail = styled.View`
  flex: 1;
  justify-content: center;
`

const ArticleTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`

const ArticleDate = styled.Text`
  font-size: 12px;
  color: rgba(0,0,0,0.4);
  margin-top: 2px;
`

export const Article = ({imageUrl, title, createdAt}) => {
    return (
        <ArticleView>
            <ArticleImage
                source={{uri: imageUrl}}
            />
            <ArticleDetail>
                <ArticleTitle>{title}</ArticleTitle>
                <ArticleDate> {createdAt}</ArticleDate>
            </ArticleDetail>
        </ArticleView>
    )
}