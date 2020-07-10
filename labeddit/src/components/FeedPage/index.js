import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import usePosts from "../../hooks/usePosts";
import { Helmet } from "react-helmet-async";
import PostCard from "../PostCard";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import PostForm from "../PostForm";
import { languages } from "../../languages";
import LanguageContext from "../../contexts/LanguageContext";
import { SortWrapper } from "./styles";

const FormContainer = styled.form`
display: grid;
justify-items: center;
margin-top: 20px;
`
const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
  }));



const FeedPage = () => {
  const [posts, getPosts] = usePosts();
  const history = useHistory();
  const classes = useStyles();
  const [order, setOrder] = useState("created_new");
  const [selectedLanguage] = useContext(LanguageContext);

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const [form, handleFormChange] = useForm({ text: "", title: "" });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const response = await createPost(form);
        console.log(response)
        if (response) {
          getPosts();
          alert("Post criado com sucesso")
          
        } else {
          alert("Erro ao criar Post")
        }
    };


  const handlePostClick = (postId) => history.push(`posts/${postId}`);

  const orderedPosts = posts;
  switch (order) {
    case "created_new":
      orderedPosts.sort((a, b) => b.createdAt - a.createdAt);
      break;
    case "created_old":
      orderedPosts.sort((a, b) => a.createdAt - b.createdAt);
      break;
    case "votes_more":
      orderedPosts.sort((a, b) => b.votesCount - a.votesCount);
      break;
    case "votes_less":
      orderedPosts.sort((a, b) => a.votesCount - b.votesCount);
      break;
    default:
      break;
  }

  return posts.length > 0 ? (
    <div>
      <Helmet>
        <title>LabEddit</title>
      </Helmet>

      <PostForm getPosts={getPosts} />
      <SortWrapper>
        <div />
        <label>
          {languages[selectedLanguage].sortLabel}{" "}
          <select onChange={handleOrderChange}>
            <option value="created_new">
              {languages[selectedLanguage].newest}
            </option>
            <option value="created_old">
              {languages[selectedLanguage].oldest}
            </option>
            <option value="votes_more">
              {languages[selectedLanguage].upvotes}
            </option>
            <option value="votes_less">
              {languages[selectedLanguage].downvotes}
            </option>
          </select>
        </label>
      </SortWrapper>

      {orderedPosts.map((post) => (
        <PostCard
          key={post.id}
          postId={post.id}
          userName={post.username}
          title={post.title}
          text={post.text}
          commentsCount={post.commentsCount}
          votesCount={post.votesCount}
          userVoteDirection={post.userVoteDirection}
          createdAt={post.createdAt}
          feedpage
        />
      ))}
    </div>
  ) : (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default FeedPage;
