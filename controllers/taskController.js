const express = require('express');
const router = express.Router();

const { v4: uuidv4 } = require('uuid');

let posts = [
    {id: 1, title: 'First Post'},
    {id: 2, title: 'Second Post'},
    {id: 3, title: 'Third Post'},
    {id: 4, title: 'Fourth Post'},
    {id: 5, title: 'Fifth Post'}
];

// Get all posts
const getAllPosts = (req, res) => {
    if (!res.status(200)) {
        throw new Error(`Could not get all posts`);
    } else {
        res.render('posts', { posts });
    }
};

// Get single post
const getSinglePost = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id)
    
    if (!post) {
        return res.status(404).send( {error: `Could not find post with id of ${id}`});
    }

    res.status(200).send(post);
};

// Create a post
const createPost = (req, res) => {
    const id = uuidv4();
    const title = req.body.title;

    posts.push({
        id: id,
        title: title
    });

    res.status(201).send(posts)
};

// Update a post
const updatePost = (req, res) => {
    const id = parseInt(req.params.id);
    const title = req.body.title;
    const post = posts.find(post => post.id === id);

    post.title = title;

    res.send(posts);
};

// Delete a post
const deletePost = (req, res) => {
    const id = parseInt(req.params.id);
    posts = posts.filter(post => post.id !== id);

    res.send(posts);
};

module.exports = {
    getAllPosts,
    getSinglePost,
    createPost,
    updatePost,
    deletePost
};