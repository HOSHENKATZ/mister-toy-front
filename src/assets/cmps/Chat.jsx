import { useEffect, useState } from "react"


export function Chat(toy) {
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState({message: ''})
    const [topic, setTopic] = useState(toy.toy.name)

console.log(toy)
   
function send(ev){
    ev.preventDefault()
    setMessages((messages) => ([...messages, message ]))
}
function handleChange({ target }) {
    let { value, name: field, type } = target
    value = type === 'number' ? +value : value
    setMessage((message) => ({ ...message, [field]: value }))
   
}
     console.log(messages)
    return (
        <div className="chat">
            <p>Lets Chat about {topic}:</p>
            <article className="msg-container">
               {messages?
                <ul>
                    {
                        messages.map(message => {
                           {console.log(message)} 
                            return <li>{message.message}</li>
                        })
                    }
                </ul>:
                <div>no messages yet</div>
               } 
            </article>
            <form className="flex justify-between" onSubmit={send} >
                <input type="text"
                    id="message"
                    name="message"
                    placeholder="Enter your massage"
                    onChange={handleChange}
                />
                <button>➤</button>
            </form>
        </div>
    )
}