import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns'

const initialState = [
    {id: '1', 
    title: 'My First Post', 
    content: 'This is my first post!', 
    date: sub(new Date(), { minutes: 10 }).toISOString(), 
    reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      }
    },
    {id: '2', 
    title: 'My Second Post', 
    content: 'This is my second post!', 
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      }
    },
    {id: '3', 
    title: 'My Third Post', 
    content: 'This is my third post!', 
    date: sub(new Date(), { minutes: 2 }).toISOString(),
    reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      }
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            //The "prepare callback" function can take multiple arguments, generate random values like unique IDs, and run whatever other synchronous logic is needed to decide what values go into the action object. It should then return an object with the payload field inside. 
            prepare(title, content, userId){
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        content, 
                        user: userId,
                        reactions: {
                            thumbsUp: 0,
                            hooray: 0,
                            heart: 0,
                            rocket: 0,
                            eyes: 0,
                          }
                    }
                }
            }            
        },
        postUpdated(state, action) {
            const {id, title, content} = action.payload
            const existingPost = state.find(post=>post.id ===id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
              existingPost.reactions[reaction]++
            }
          }
    }
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions
export default postsSlice.reducer
