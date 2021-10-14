import React from 'react'

const ChatComponent = () => {
    const [chat, setChat] = React.useState(
        [
        {
            author: 'Alfonso',
            message: 'Hola mundo Hola mundo Hola mundo Hola mundoHola mundo Hola mundoHola mundo Hola mundoHola mundoHola mundo'
        },
        {
            author: 'Andrew',
            message: 'Hola universo'
        }
        ]
    );
    const [messageState, setMessage] = React.useState({
        message: '',
    });

    const handleInputOnChange = (event) => {
        setMessage({
            ...messageState,
            [event.target.name]: event.target.value
        })
    }

    const sendMessage = () => {
        const message = messageState.message;
        const newMessage = {
            author: 'Alfonso',
            message,
        };

        let newChat = [...chat]
        newChat.push(newMessage)

        console.log(newChat);
        setChat(newChat)

        fetch('/api/storeJSON', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "id": 'AndrewAlfonso',
            "chat": newChat
        })
        })
        .then((res) => res.json())
        .then((data) => {
            if (data) {
                console.log(data);
            }
        });
    }
    
    return (
        <div>
            <div className="message-history">
                {
                    chat.map((item, index) => {
                        return (
                            item.author === 'Alfonso' ? (
                                <div className="Alfonso-style">
                                    <span className="font-style">{ item.message }</span>
                                </div>
                            ) : (
                                <div className="Andrew-style">
                                    <span className="font-style">{ item.message }</span>
                                </div>
                            )
                        );
                    })
                }
            </div>
            <div>
                <div className="entry-block">
                <input type="text"
                    className="inpunt-entry"
                    name="message"
                    onChange={handleInputOnChange}/>
                <button className="button-enviar" onClick={sendMessage}>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default ChatComponent;
