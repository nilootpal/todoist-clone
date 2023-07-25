import React from "react"
import { firebase } from "../firebase"

export const Checkbox = ({ id, taskDesc }) => {
    const archivedTasks = () => {
        firebase
        .firestore()
        .collection('tasks')
        .doc(id)
        .update({
            archived: true
        })
    }   

    return(
        <div 
        className="checkbox-holder" 
        data-testid='checkbox-action' 
        onClick={() => archivedTasks()}
        onKeyDown={() => archivedTasks()}
        role="button"
        tabIndex={0}
        aria-label={`Mark ${taskDesc} as done`}
        >
            <span className="checkbox"/>
        </div>
    )
}
