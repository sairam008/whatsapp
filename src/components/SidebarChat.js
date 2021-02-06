import React, { useState, useEffect } from "react";
import "../css/SidebarChat.css";
import { Avatar } from "@material-ui/core";
import db from "../firebase";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SidebarChat({ id, name, AddnewChat }) {
	const [seed, setSeed] = useState("");
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		if (id) {
			db.collection("rooms")
				.doc(id)
				.collection("message")
				.orderBy("timestamp", "desc")
				.onSnapshot((snapshot) => {
					setMessages(snapshot.docs.map((doc) => doc.data()));
				});
		}
		setSeed(Math.floor(Math.random() * 5000));
	}, [id]);

	const createChat = () => {
		const roomName = prompt("Please Enter Name of the new Chat Room");

		if (roomName) {
			db.collection("rooms").add({
				name: roomName,
			});
		}
	};

	return !AddnewChat ? (
		<Link to={`/rooms/${id}/`}>
			<div className="sidebar__chat">
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				<div className="sidebar__chatInfo">
					<h2>{name}</h2>
					<p>{messages[0]?.message ? messages[0]?.message : "No Chats"}</p>
				</div>
			</div>
		</Link>
	) : (
		<div className="sidebar__chat" onClick={createChat}>
			<h2>Add New Chat</h2>
		</div>
	);
}

export default SidebarChat;
