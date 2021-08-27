import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Disqus from "disqus-react"
import moment from 'moment';
import { fetchBlogPosts } from '../../redux/actions/blogActions';

const SinglePost = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const posts = useSelector(state => state.blogReducer.posts);

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, []);

  if (!posts.length) return (<h1>Loading...</h1>);

  const id = params.id;
  const singlePost = posts.find(el => el._id === id);


  const disqusShortname = "janerosenzweig";
  const disqusConfig = {
      url: window.location.href,
      identifier: id,
      title: singlePost.title,
    };

  return (
    <div id="single-post-view">
      <h1>{singlePost.title}</h1>
      <img src={singlePost.img} alt="singlePost-photo" width="500px" height="350px"/>
      <span>By: {singlePost.author}</span>
      <br />
      <p>{singlePost.post}</p>
      Posted on: <span>{moment(singlePost.createdAt).format('MMMM Do YYYY')}</span>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
    </div>
  )
}

export default SinglePost;