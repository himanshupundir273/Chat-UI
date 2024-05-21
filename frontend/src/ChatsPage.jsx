import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) =>{

    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
            projectId='fa93ca4d-8846-4cfb-9f30-9039eb9f22e9'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
        />
        </div>
    )
}

export default ChatsPage;