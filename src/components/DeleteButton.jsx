import React from "react";

//change name to button. so we can havec multiple actions for the same button

const DeleteButton = ({ postId, removePost }) => {
    return (
        <button type='button' className="delete-button" onClick={removePost(postId)}>Delete Me!</button>
    )
}

export default DeleteButton