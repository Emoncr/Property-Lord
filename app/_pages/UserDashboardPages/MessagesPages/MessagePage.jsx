'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Paperclip, Smile, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { X } from 'lucide-react';
import { Search } from 'lucide-react';

const FriendsList = ({ friends, onSelectFriend, selectedFriend }) => {
    return (
        <div className="flex h-full w-full flex-col overflow-hidden rounded-l-lg bg-gray-800 text-white">
            <div className="p-4">
                <h2 className="mb-4 text-xl font-bold">Chats</h2>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search friends..."
                        className="w-full rounded-full bg-gray-700 py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
            </div>
            <ScrollArea className="flex-1">
                {friends.map((friend) => (
                    <div
                        key={friend.id}
                        className={`flex cursor-pointer items-center p-4 transition-colors hover:bg-gray-700 ${
                            selectedFriend === friend.id ? 'bg-gray-700' : ''
                        }`}
                        onClick={() => onSelectFriend(friend.id)}
                    >
                        <Avatar className="mr-3 ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-800">
                            <AvatarImage
                                src={friend.avatar}
                                alt={friend.name}
                            />
                            <AvatarFallback>{friend.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <span className="block font-medium">
                                {friend.name}
                            </span>
                            <span className="text-sm text-gray-400">
                                {friend.status}
                            </span>
                        </div>
                        <div
                            className={`h-3 w-3 rounded-full ${
                                friend.status === 'online'
                                    ? 'bg-green-500'
                                    : friend.status === 'away'
                                      ? 'bg-yellow-500'
                                      : 'bg-gray-500'
                            }`}
                        ></div>
                    </div>
                ))}
            </ScrollArea>
        </div>
    );
};

const UserProfile = ({ user, onClose }) => {
    // Dummy shared images data
    const sharedImages = [
        '/placeholder.svg',
        '/placeholder.svg',
        '/placeholder.svg',
        '/placeholder.svg',
        '/placeholder.svg',
        '/placeholder.svg',
    ];

    return (
        <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-50">
            <div className="flex h-full w-full max-w-md flex-col overflow-hidden bg-white">
                <div className="flex items-center justify-between bg-gray-800 p-4 text-white">
                    <h2 className="text-xl font-bold">User Profile</h2>
                    <Button
                        variant="ghost"
                        onClick={onClose}
                        className="text-white hover:bg-gray-700"
                    >
                        <X className="h-6 w-6" />
                    </Button>
                </div>
                <ScrollArea className="flex-1 p-4">
                    <div className="mb-6 flex flex-col items-center">
                        <Avatar className="mb-4 h-24 w-24">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <h3 className="text-2xl font-semibold">{user.name}</h3>
                        <p className="text-gray-500">{user.status}</p>
                    </div>
                    <div className="mb-6">
                        <h4 className="mb-2 text-lg font-semibold">
                            Shared Images
                        </h4>
                        <div className="grid grid-cols-3 gap-2">
                            {sharedImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Shared image ${index + 1}`}
                                    className="h-24 w-full rounded object-cover"
                                />
                            ))}
                        </div>
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
};

const MessagePage = () => {
    const [friends] = useState([
        { id: 1, name: 'John', avatar: '/placeholder.svg', status: 'online' },
        { id: 2, name: 'Emma', avatar: '/placeholder.svg', status: 'offline' },
        { id: 3, name: 'Michael', avatar: '/placeholder.svg', status: 'away' },
        { id: 4, name: 'Sophia', avatar: '/placeholder.svg', status: 'online' },
    ]);
    const [selectedFriend, setSelectedFriend] = useState(1);
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'John',
            content: 'Hey, how are you?',
            timestamp: '10:00 AM',
        },
        {
            id: 2,
            sender: 'You',
            content: "I'm good, thanks! How about you?",
            timestamp: '10:05 AM',
        },
        {
            id: 3,
            sender: 'John',
            content: 'Doing great! Any plans for the weekend?',
            timestamp: '10:10 AM',
        },
    ]);
    const [newMessage, setNewMessage] = useState('');
    const [showProfile, setShowProfile] = useState(false);
    const [showFriendsList, setShowFriendsList] = useState(true);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim() !== '') {
            const newMsg = {
                id: messages.length + 1,
                sender: 'You',
                content: newMessage,
                timestamp: new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                }),
            };
            setMessages([...messages, newMsg]);
            setNewMessage('');
        }
    };

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };

    const toggleFriendsList = () => {
        setShowFriendsList(!showFriendsList);
    };

    return (
        <div className="flex h-[calc(100vh-95px)] bg-gray-100">
            {showFriendsList && (
                <div className="absolute z-10 h-full w-full md:relative md:w-80">
                    <FriendsList
                        friends={friends}
                        onSelectFriend={(id) => {
                            setSelectedFriend(id);
                            setShowFriendsList(false);
                        }}
                        selectedFriend={selectedFriend}
                    />
                </div>
            )}
            <div className="flex flex-1 flex-col overflow-hidden rounded-r-lg bg-white shadow-xl">
                <div className="flex items-center justify-between bg-gray-800 p-4 text-white">
                    <div className="flex items-center">
                        <Button
                            variant="ghost"
                            className="mr-2 text-white hover:bg-gray-700 md:hidden"
                            onClick={toggleFriendsList}
                        >
                            ☰
                        </Button>
                        <Avatar className="mr-3">
                            <AvatarImage
                                src={
                                    friends.find((f) => f.id === selectedFriend)
                                        ?.avatar
                                }
                                alt={
                                    friends.find((f) => f.id === selectedFriend)
                                        ?.name
                                }
                            />
                            <AvatarFallback>
                                {
                                    friends.find((f) => f.id === selectedFriend)
                                        ?.name[0]
                                }
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="text-lg font-semibold">
                                {
                                    friends.find((f) => f.id === selectedFriend)
                                        ?.name
                                }
                            </h2>
                            <span className="text-xs text-gray-300">
                                {
                                    friends.find((f) => f.id === selectedFriend)
                                        ?.status
                                }
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Button
                            variant="ghost"
                            className="mr-2 text-white hover:bg-gray-700"
                            onClick={toggleProfile}
                        >
                            <User className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-white hover:bg-gray-700"
                        >
                            <Paperclip className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
                <ScrollArea className="flex-1 bg-gray-50 p-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`mb-4 flex items-end ${
                                message.sender === 'You'
                                    ? 'justify-end'
                                    : 'justify-start'
                            }`}
                        >
                            {message.sender !== 'You' && (
                                <Avatar className="mb-2 mr-2">
                                    <AvatarImage
                                        src="/placeholder.svg"
                                        alt={message.sender}
                                    />
                                    <AvatarFallback>
                                        {message.sender[0]}
                                    </AvatarFallback>
                                </Avatar>
                            )}
                            <div
                                className={`max-w-[70%] rounded-lg p-3 ${
                                    message.sender === 'You'
                                        ? 'rounded-br-none bg-blue-500 text-white'
                                        : 'rounded-bl-none bg-white text-gray-800 shadow'
                                }`}
                            >
                                <p>{message.content}</p>
                                <span className="mt-1 block text-xs opacity-70">
                                    {message.timestamp}
                                </span>
                            </div>
                        </div>
                    ))}
                </ScrollArea>
                <form
                    onSubmit={handleSendMessage}
                    className="border-t bg-white p-4"
                >
                    <div className="flex items-center">
                        <Button
                            type="button"
                            variant="ghost"
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <Smile className="h-5 w-5" />
                        </Button>
                        <Input
                            type="text"
                            placeholder="Type your message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            className="mx-2 flex-grow border-none bg-gray-100 focus:ring-2 focus:ring-blue-500"
                        />
                        <Button
                            type="submit"
                            className="rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600"
                        >
                            <Send className="h-5 w-5" />
                        </Button>
                    </div>
                </form>
            </div>
            <div
                className={`fixed inset-y-0 right-0 w-full max-w-md transform bg-white shadow-xl transition-transform duration-300 ease-in-out ${
                    showProfile ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {showProfile && (
                    <UserProfile
                        user={friends.find((f) => f.id === selectedFriend)}
                        onClose={toggleProfile}
                    />
                )}
            </div>
        </div>
    );
};

export default MessagePage;
