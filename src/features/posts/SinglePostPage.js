import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'

export const SinglePostPage = ( { match } ) => {
    const { postId } = match.params //React Router will pass in a match object as a prop that contains the URL information we're looking for. When we set up the route to render this component, we're going to tell it to parse the second part of the URL as a variable named postId, and we can read that value from match.params.
    // postId = { match.params } ?
    // {postId: match.params} ?

    const post = useSelector(state => 
        state.posts.find(post => post.id === postId)
        )
    if(!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }
    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <div>
                    <PostAuthor userId={post.user} />
                    <TimeAgo timestamp={post.date} />
                </div>
                <p className="post-content">{post.content}</p>
                <ReactionButtons post={post} />
                <Link to={`/editPost/${post.id}`} className="button">
                    Edit Post
                </Link>
            </article>
        </section>
    )
}